const sortHelperAsc = function sortHelperAsc(taskA, taskB) {
  return taskA.taskGroup[0].localeCompare(taskB.taskGroup[0]);
};

const sortHelperDesc = function sortHelperDesc(taskA, taskB) {
  return -1 * taskA.taskGroup[0].localeCompare(taskB.taskGroup[0]);
};

function sortByTaskGroupAscending(tasks) {
  return tasks.sort(sortHelperAsc);
}

function sortByTaskGroupsDescending(tasks) {
  return tasks.sort(sortHelperDesc);
}

export { sortByTaskGroupAscending, sortByTaskGroupsDescending };
