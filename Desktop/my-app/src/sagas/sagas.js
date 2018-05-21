import {takeEvery, takeLatest} from 'redux-saga';
import {fork,call,put, all} from 'redux-saga/effects';
import request from 'superagent';
import {FETCH_COURSES, FETCH_SELECTED} from '../store/actions'
import {getCourses} from '../services/db-school.service';
import {getSelected} from '../services/db-school.service';

function* callgetCourses ({resolve,reject}) {  
    let result = yield call(getCourses, null);
      
    if(result) {
        yield put({type:'FETCH_COURSES_DONE',result});
        yield call(resolve,null);
    }
    else {
        yield call(reject,null);
    }    
}   

function* getCoursesSaga() {   
    yield* takeEvery(FETCH_COURSES, callgetCourses);
}



////////////////////
/*function* callgetSelected ({id,resolve,reject}) {
    console.log("DESILA SE FETCH SELECTED, ovde je fetch_selected_done");
    let result = yield call(getSelected, id); 
    console.log(result);
    
    if(result) {
        yield put({type:'FETCH_SELECTED_DONE', result});
        yield call(resolve);
    }
    else {
        yield call(reject, 'No course at the moment');
    }    
}

function* getSelectedSaga() {
    console.log("usao u get selected saga, ona ceka fetch_selected akciju");
    yield* takeEvery(FETCH_SELECTED, callgetSelected);
}*/
//////////////////
export default function* root() {
    yield all([
        fork(getCoursesSaga),
        //fork(getSelectedSaga)
    ])
}