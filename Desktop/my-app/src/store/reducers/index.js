import {combineReducers} from 'redux';
import showCoursesReducer from './courses.reducer';
import activeCourseReducer from './active-course.reducer'
import activeCourse from '../../components/Courses/active-course';

const rootReducer = combineReducers({
    courses: showCoursesReducer,
    activeCourse: activeCourseReducer
});

export default rootReducer;