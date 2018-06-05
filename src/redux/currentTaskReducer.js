import data from '../utils/data';
import { GET_ONE_TASK } from './actionTypes';

function currentTaskReducer(state = data, action) {
  var _state = state.slice();
  switch (action.type) {
    case GET_ONE_TASK:
      for (var i = 0; i < _state.length; i++) {
        if (_state[i].id === action.taskId) {
          return _state[i];
        }
      }
    default:
      return state;
  }
}

export default currentTaskReducer;