import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
// import currentTaskReducer from './currentTaskReducer';

export default combineReducers({
  tasks: taskReducer
});