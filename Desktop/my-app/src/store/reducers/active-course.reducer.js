import { selectCourse } from "../actions";

 function showSelectedReducer(state=null, action) {
    switch(action.type) {        
        case 'FETCH_SELECTED_DONE':{  
        console.log(`USO SAM U FETCH SELECTED DONE I VRACEN KURS JE: ${action.payload}`);      
         return action.payload;
        }
        default:
        return state;
    }
}

export default showSelectedReducer;