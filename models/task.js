const { v4: uuidv4 } = require("uuid");

class Task {
  id = "";
  title = "";
  done = false;
  creation = null;
  finished = null;

  constructor(title) {
    this.id = uuidv4();
    this.title = "";
    this.done = false;
    this.creation = new Date();
  }
}

module.exports = {
  Task,
};
