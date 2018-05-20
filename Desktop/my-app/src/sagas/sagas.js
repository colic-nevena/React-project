import {takeEvery, takeLatest} from 'redux-saga';
import {fork,call,put} from 'redux-saga/effects';
import request from 'superagent';
import {FETCH_COURSES, FETCH_SELECTED} from '../store/actions'

function getCourses() {
    //console.log("usao u get courses, ovde zove api");
    const url = "http://localhost:3000/predmeti/";
    return request
           .get(url)
           .then((data)=>{
               return JSON.parse(data.text);
           })
}

function* callgetCourses ({resolve,reject}) {
   // console.log("usao u callget courses, ovde je fetch_courses_done");
    let result = yield call(getCourses);
    //console.log(result);
    
    if(result) {
        yield put({type:'FETCH_COURSES_DONE',result});
        yield call(resolve);
    }
    else {
        yield call(reject,'No courses at the moment');
    }    
}

function* getCoursesSaga() {
    //console.log("usao u get courses saga, ona ceka fetch_courses akciju");
    yield* takeEvery(FETCH_COURSES, callgetCourses);
}



////////////////////

function getSelected() {
    console.log("usao u get selected, ovde zove api");
    const url = "http://localhost:3000/predmeti/";
    return request
           .get(url)          
           .then((data)=>{
               return JSON.parse(data.text);
           })
}

function* callgetSelected ({resolve,reject}) {
    console.log("DESILA SE FETCH SELECTED, ovde je fetch_selected_done");
    let result = yield call(getSelected);
    console.log(result);
    
    if(result) {
        yield put({type:'FETCH_SELECTED_DONE',result});
        yield call(resolve);
    }
    else {
        yield call(reject, 'No course at the moment');
    }    
}

function* getSelectedSaga() {
    console.log("usao u get selected saga, ona ceka fetch_selected akciju");
    yield* takeLatest(FETCH_SELECTED, callgetSelected);
}

//////////////////
export default function* root() {
    yield [
        fork(getCoursesSaga),
        fork(getSelectedSaga)
    ]
}