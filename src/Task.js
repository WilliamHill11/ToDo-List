class Inbox {
  constructor(title, dueDate, inbox, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.inbox = inbox;
    this.priority = priority;
  }
}

export let toDoList = [];

export function createInbox() {
  let thisList = new Inbox(
    title.value,
    dueDate.value,
    inbox.value,
    priority.value
  );
  toDoList.push(thisList);
  console.log(toDoList);
}

export default Inbox;
