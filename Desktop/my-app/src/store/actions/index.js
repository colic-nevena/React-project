import coursesList from "../../components/Courses/courses-list";
import course from "../../components/Courses/active-course"

export const FETCH_COURSES = 'FETCH_COURSES';
export const FETCH_SELECTED = 'FETCH_SELECTED';


export function showCourses(dispatch) {
    //console.log("usao u showCourses");
    return {
        type:FETCH_COURSES,
        payload:coursesList
    }
}

export  function selectCourse(dispatch) {
    console.log("usao u selectCourse");   
    return {
        type:FETCH_SELECTED,     
        payload:course
    }
  
}

