function activeCourseReducer(state={}, action) {
    switch(action.type) {        
        case 'FETCH_SELECTED_DONE':
         return action.result;
         default:
          return state;
    }
}

export default activeCourseReducer;