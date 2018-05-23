import { showCourses } from "../actions";

 function showCoursesReducer(state=[], action) {
    switch(action.type) {        
        case 'FETCH_COURSES_DONE':{
         //console.log("usao u showCoursesReducer i fetch done");
         return action.payload;
        }
         default:
          return state;
    }
}

export default showCoursesReducer;