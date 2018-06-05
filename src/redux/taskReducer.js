import data from '../utils/data';
import { TOGGLE_COMPLETION, GET_TASKS } from './actionTypes';

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
    default:
      return state;
  }
}

export default taskReducer;