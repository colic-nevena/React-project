import {takeEvery, takeLatest} from 'redux-saga';
import {fork,call,put, all} from 'redux-saga/effects';
import request from 'superagent';
import { FETCH_COURSES, FETCH_DELETE, FETCH_ADD, FETCH_TEACHERS, FETCH_BEST_TEACHERS } from '../store/actions'
import {getCourses, getSelected, deleteStudent, getStudentByEmail, getCourseByName, updateCourse, addStudent, getStudents, getTeachers} from '../services/db-school.service';


function* callgetCourses () {  
    let kursevi = yield call(getCourses);      
  
        yield put({type:'FETCH_COURSES_DONE', payload: kursevi});
   
}   

function* getCoursesSaga() {   
    yield takeLatest(FETCH_COURSES, callgetCourses);
}



////////////////


function* callgetDelete({payload}) {  
    console.log("usao u callgetDelete, sad ce fetch done: " + payload);  
    let studMejl = yield call(getStudentByEmail, payload);//on vrati studenta po mejlu, kao niz        
    
    let kursZaUpdate = studMejl[0].kurs;
    console.log("KURS ZA UPDATE JE: " + kursZaUpdate);
    //vrati kurs po imenu: kursZaUpdate
    let res = yield call(getCourseByName, kursZaUpdate);//ovde je vracen kurs po imenu
    res[0].mesta_na_kursu++;
    console.log("MESTA IMA: " + res[0].mesta_na_kursu);
    const novi = {
        "id": res[0].id,
        "ime": res[0].ime,
        "rating": res[0].rating,
        "mesta_na_kursu": res[0].mesta_na_kursu,
        "science": res[0].science,
        "zabrana_rez": res[0].zabrana_rez,
        "dani": res[0].dani,
        "sati": res[0].sati
    };
    
    let finalRes = yield call(updateCourse,res[0].id,novi);    
    
    let forDelete= yield call(deleteStudent, studMejl[0].id); //obrises studenta kog je vratio
    alert("Uspešno ste se ispisali iz škole.");
    
    
}   

function* getDeleteSaga() { 
    console.log("usao u getDelete saga, ceka fetch delete");  
    yield* takeLatest(FETCH_DELETE, callgetDelete);
}







///////////

function* callAddStudent({payload,name,lastname,course}) {
    console.log("usaooooo u callAddStudent");  
    let niz = yield call(getStudents, null);   
    let duz = niz.length;
    console.log("duzina niza je: " + duz);
    let noviID = duz+1;
    console.log("a novi id je: " + noviID);
    
    const noviS = {
        "id": noviID,
        "ime": name,
        "prezime": lastname,
        "kurs": course,
        "email": payload
      };
      
    console.log("NOVI STUDENT: " + noviS.id, + " " + noviS.ime);      
    
    let dodaj = yield call(addStudent, noviS);    
    alert("Uspešno Ste se upisali u našu školu. Dobrodošli!");
     
}   

function* addNewStudentSaga() {   
    console.log("slusam za fetch add, u addNewStudentSaga sam");
    yield* takeLatest(FETCH_ADD, callAddStudent);
}








//////////////

function* callgetTeachers() {  
    let nastavnici = yield call(getTeachers);      
  
    yield put({type:'FETCH_TEACHERS_DONE', payload: nastavnici});
    
}   

function* getTeachersSaga() {   
    yield takeLatest(FETCH_TEACHERS, callgetTeachers);
}





//////////////

function* callgetBestTeachers() {  
    let najbolji = yield call(getTeachers);      
  
    yield put({type:'FETCH_BEST_TEACHERS_DONE', payload: najbolji});
    
}   

function* getBestTeachersSaga() {   
    yield takeLatest(FETCH_BEST_TEACHERS, callgetBestTeachers);
}







/////////////

export default function* root() {
    yield all([
        fork(addNewStudentSaga),
        fork(getTeachersSaga),
        fork(getCoursesSaga), 
        fork(getBestTeachersSaga),       
        fork(getDeleteSaga)
    ])
}