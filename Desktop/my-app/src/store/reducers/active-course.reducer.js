import { selectCourse } from "../actions";

function activeCourseReducer(state={}, action) {
    switch(action.type) {        
        case 'FETCH_SELECTED_DONE':{
            console.log("usao u activeCourseReducer i fetch selected done");
            return action.result;
           }      
         default:
          return state;
    }
}

export default activeCourseReducer;