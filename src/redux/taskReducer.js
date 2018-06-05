import data from '../utils/data';
import { TOGGLE_COMPLETION, GET_TASKS, GET_ONE_TASK, GET_TASKS_BY_GROUP, GET_GROUP_NAMES } from './actionTypes';

function taskReducer(state = data, action) {
  var _state = state.slice();
  switch (action.type) {
    case GET_TASKS:
      return state;
    case TOGGLE_COMPLETION:
      for (var i = 0; i < _state.length; i++) {
        if (_state[i].id === action.taskId) {
          _state[i].completedAt = !_state[i].completedAt;
        }
      }
      state = _state;
      return state;
    case GET_ONE_TASK:
      for (var i = 0; i < _state.length; i++) {
        if (_state[i].id === action.taskId) {
          return _state[i];
        }
      }
    case GET_GROUP_NAMES: 
      var sortDataByGroup = {};
      _state.forEach(object => {
        if (sortDataByGroup.hasOwnProperty(object.group)) {
          sortDataByGroup[object.group].push(object);
        } else {
          sortDataByGroup[object.group] = [object];
        }
      });
      return Object.keys(sortDataByGroup);
    case GET_TASKS_BY_GROUP:
      var sortDataByGroup = {};
      _state.forEach(object => {
        if (sortDataByGroup.hasOwnProperty(object.group)) {
          sortDataByGroup[object.group].push(object);
        } else {
          sortDataByGroup[object.group] = [object];
        }
      });
      return sortDataByGroup[action.groupName];
    default:
      return state;
  }
}

export default taskReducer;