class Inbox {
  constructor(title, dueDate, inbox, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.inbox = inbox;
    this.priority = priority;
  }
}

let toDoList = [];

export function createInbox() {
  toDoList.push(
    new Inbox(title.value, dueDate.value, inbox.value, priority.value)
  );
  console.log(toDoList);
}

export default Inbox;
