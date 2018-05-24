import {combineReducers} from 'redux';
import showCoursesReducer from './courses.reducer';
import { showTeachers } from '../actions';
import showTeachersReducer from './teachers.reducer';
import activeCourse from '../../components/Courses/active-course';
import showSelectedReducer from './active-course.reducer';



const rootReducer = combineReducers({
    courses: showCoursesReducer,
    teachers: showTeachersReducer,
    activeCourse: showSelectedReducer
});

export default rootReducer;