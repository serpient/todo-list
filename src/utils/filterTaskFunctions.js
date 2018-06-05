export function getOneTask(tasks, index) {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === index) {
      return tasks[i];
    }
  }
}