export function getOneTask(tasks, index) {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === index) {
      return tasks[i];
    }
  }
}

export function sortTasksByGroup(tasks) {
  var sortDataByGroup = {};
  tasks.forEach(object => {
    if (sortDataByGroup.hasOwnProperty(object.group)) {
      sortDataByGroup[object.group].push(object);
    } else {
      sortDataByGroup[object.group] = [object];
    }
  });
  return sortDataByGroup;
}

export function getTasksByGroup(tasks, groupName) {
  var newTasks = sortTasksByGroup(tasks);
  return newTasks[groupName];
}

export function getGroupNames(tasks) {
  var newTasks = sortTasksByGroup(tasks);
  return Object.keys(newTasks);
}