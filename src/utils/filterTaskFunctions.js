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

export function dependenciesAreCompleted(tasks, array) {
  if (array === []) {
    return true;
  }
  function isCompleted(index) {
    for (var i = 0; i < tasks.length; i++) {
      console.log( tasks[i] );
      if (tasks[i].id === index) {
        console.log( tasks[i].id );
        return tasks[i].completedAt ? true : false;
      }
    }
  }
  return array.every(isCompleted)
}