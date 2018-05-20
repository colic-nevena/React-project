import {combineReducers} from 'redux';
import showCoursesReducer from './courses.reducer';
import activeCourseReducer from './active-course.reducer'
import course from '../../components/Courses/active-course';

const rootReducer = combineReducers({
    courses: showCoursesReducer,
    course: activeCourseReducer
});

export default rootReducer;