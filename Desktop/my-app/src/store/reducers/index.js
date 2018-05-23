import {combineReducers} from 'redux';
import showCoursesReducer from './courses.reducer';
import { showTeachers } from '../actions';
import showTeachersReducer from './teachers.reducer';



const rootReducer = combineReducers({
    courses: showCoursesReducer,
    teachers: showTeachersReducer
});

export default rootReducer;