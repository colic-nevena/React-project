import {takeEvery} from 'redux-saga';
import {fork,call,put, take} from 'redux-saga/effects';
import request from 'superagent';
import { FETCH_COURSES } from '../store/actions/index'

function getCourses() {
    console.log("usao u get courses");
    const url = "http://localhost:3000/predmeti/";
    return request
           .get(url)
           .then((data)=>{
               return JSON.parse(data.text);
           })
}

function* callgetCourses ({resolve,reject}) {
    console.log("usao u callget courses");
    const result = yield call(getCourses);
    console.log(result);
    
    if(result.query.results) {
        yield put({type:'FETCH_COURSES_DONE',result});
        yield call(resolve);
    }
    else {
        yield call(reject,'No courses at the moment');
    }    
}

function* getCoursesSaga() {
    console.log("usao u get courses saga");
    yield* takeEvery(FETCH_COURSES,callgetCourses);
}

export default function* root() {
    yield [
        fork(getCoursesSaga)
    ]
}