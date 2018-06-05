import { TOGGLE_COMPLETION, GET_TASKS } from './actionTypes';

export function toggleCompletion(taskId) {
  return {
    type: TOGGLE_COMPLETION,
    taskId: taskId
  }
}

export function getTasks() {
  return {
    type: GET_TASKS
  }
}
