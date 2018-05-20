import { showCourses } from "../actions";

 function showCoursesReducer(state=[], action) {
    switch(action.type) {        
        case 'FETCH_COURSES_DONE':{
         console.log("uso u showCoursesReducer");
         return action.result;
        }
         default:
          return state;
    }
}

export default showCoursesReducer;