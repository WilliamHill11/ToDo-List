class CreateTask {
  constructor(task, dueDate, inbox, priority) {
    this.task = task;
    this.dueDate = dueDate;
    this.inbox = inbox;
    this.priority = priority;
  }
}

const list = new CreateTask('yo', 'july', 'cool', 'now!!');

console.log(list);

export default CreateTask;
