import { showTeachers, showBestTeachers } from "../actions";

 function showTeachersReducer(state=[], action) {
    switch(action.type) {        
        case 'FETCH_TEACHERS_DONE':{
         console.log("usao u showTeachersReducer i fetch done");
         return action.payload;
        }
                
        case 'FETCH_BEST_TEACHERS_DONE':{
            console.log("usao u show best TeachersReducer i fetch done");
            let nastavnici = action.payload;
            console.log(nastavnici);
            
            let best =  nastavnici.filter((nast)=>{
                return nast.rating > 4.4;
            });
                        
            console.log(best);
            return best;
        }        
         default:
          return state;
    }
}

export default showTeachersReducer;