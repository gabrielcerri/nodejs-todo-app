const Task = require("../models/task");

class TaskRepository {
  _task = [];

  constructor() {
    this._task = [];
  }

  getAllTask() {}

  createTask(task) {
    this._task.push(task);
  }

  deleteTask() {}

  editTask() {}

  completeTask() {}
}
