import coursesList from "../../components/Courses/courses-list";
import teachList from "../../components/Courses/teach-list";


export const FETCH_COURSES = 'FETCH_COURSES';
export const FETCH_DELETE = 'FETCH_DELETE';
export const FETCH_ADD = 'FETCH_ADD';
export const FETCH_TEACHERS = 'FETCH_TEACHERS';
export const FETCH_BY_DAY = 'FETCH_BY_DAY';
export const FETCH_BEST_TEACHERS = 'FETCH_BEST_TEACHERS';

export function showCourses(dispatch) {
    console.log("usao u showCourses");
    return {
        type: FETCH_COURSES,
      
    }
}

export function showTeachers(dispatch) {
    console.log("usao u showTEACHERS");
    return {
        type: FETCH_TEACHERS,
       
    }
}

export function showBestTeachers(dispatch) {
    console.log("usao u show BEST TEACHERS");
    return {
        type: FETCH_BEST_TEACHERS,       
    }
}

export function selectByDay(day) {
    console.log("usao u show BEST TEACHERS i dan je " + day);
    return {
        type: FETCH_BY_DAY,
        dan: day       
    }
}



export function brisiStudenta(mejl) {
    console.log("usao u brisanje, sad ce da zove fetch delete akciju i mail je: " + mejl);    
    return {
        type: FETCH_DELETE,     
        payload: mejl
    }  
}


export function dodajStudenta(mail,ime,prezime,kurs) {
    console.log("usao u dodaj studenta, sad ce da zove fetch add akciju");  
    console.log(`mejl: ${mail}, ime: ${ime}, prezime: ${prezime}, kurs: ${kurs}`);  
    return {
        type: FETCH_ADD,     
        payload: mail,
        name: ime,
        lastname: prezime,
        course: kurs
        
    }  
}




