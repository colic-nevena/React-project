import { showCourses } from "../actions";

 function showCoursesReducer(state=[], action) {
    switch(action.type) {        
        case 'FETCH_COURSES_DONE':{        
         return action.payload;
        }
        
        case 'FETCH_BY_DAY_DONE':{
            console.log("usao u BY DAY DONE");
            console.log("Trazeni dan u BY DAY DONE: " + action.dan);
            
            let svi =  action.payload;
            console.log("SVI KURSEVI: ");
            console.log(svi);
                       
            const zaPrikaz = [];
            
            svi.forEach(kurs => {
            let tmp1 = kurs.dani.find(d => d === action.dan);          
            if (tmp1 !== undefined)
                zaPrikaz.push(kurs);
        });
          return zaPrikaz;          
      }           
         default:
          return state;
    }
}

export default showCoursesReducer;