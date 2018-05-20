export const FETCH_COURSES = 'FETCH_COURSES';
export const FETCH_SELECTED = 'FETCH_SELECTED';


export function showCourses(dispatch) {
    console.log("usao u showCourses");
    return new Promise((resolve,reject) => {
        dispatch({
            type: FETCH_COURSES,
            resolve,
            reject
        })
    })
}

export  function selectCourse(dispatch) {
    console.log("usao u selectCourse");
    return new Promise((course,resolve,reject) => {
        dispatch({
            type: FETCH_SELECTED,
            course,
            resolve,
            reject
        })
    })
}

