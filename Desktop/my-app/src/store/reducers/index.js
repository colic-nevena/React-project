import {combineReducers} from 'redux';
import showCoursesReducer from './courses.reducer';
import activeCourseReducer from './active-course.reducer';


const rootReducer = combineReducers({
    courses: showCoursesReducer,
    activeCourse: activeCourseReducer
});

export default rootReducer;