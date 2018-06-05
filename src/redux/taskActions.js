import { TOGGLE_COMPLETION, GET_TASKS, GET_ONE_TASK, GET_TASKS_BY_GROUP, GET_GROUP_NAMES } from './actionTypes';

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

export function getOneTask(taskId) {
  return {
    type: GET_ONE_TASK,
    taskId: taskId
  }
}

export function getTasksByGroup(groupName) {
  return {
    type: GET_TASKS_BY_GROUP
  }
}

export function getGroupNames() {
  return {
    type: GET_GROUP_NAMES
  }
}