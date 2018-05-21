import coursesList from "../../components/Courses/courses-list";
import activecourse from "../../components/Courses/active-course"

export const FETCH_COURSES = 'FETCH_COURSES';
export const FETCH_SELECTED = 'FETCH_SELECTED';
export const FETCH_DELETE = 'FETCH_DELETE';


export function showCourses(dispatch) {
    //console.log("usao u showCourses");
    return {
        type: FETCH_COURSES,
        payload:coursesList
    }
}

export  function selectCourse(id) {
    console.log("usao u selectCourse");    
    return {
        type: FETCH_SELECTED,     
        payload: id
    }  
}

export function brisiStudenta(mejl) {
    console.log("usao u brisanje, sad ce da zove fetch delete akciju i mail je: " + mejl);    
    return {
        type: FETCH_DELETE,     
        payload: mejl
    }  
}
