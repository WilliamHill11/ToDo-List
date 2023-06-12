import Inbox, { createInbox, toDoList } from './Task';
import Project from './Project';
import { compareAsc, format } from 'date-fns';

let log = console.log;

export const content = document.querySelector('.content');
const addTask = document.querySelector('.addTask');
const form = document.querySelector('#formID');
const formClass = document.querySelector('.form');
const formSubmit = document.querySelector('#formSubmit');
const cancelFrom = document.querySelector('#cancelForm');
const inbox = document.querySelector('.inbox');
const todayEvents = document.querySelector('.today');
const upcomingEvents = document.querySelector('.upcoming');
const project = document.querySelector('.createProject');
const toDoListWrapper = document.querySelector('.toDoListWrapper');
// s

inbox.addEventListener('click', inboxFolder);
todayEvents.addEventListener('click', todaysFolder);
upcomingEvents.addEventListener('click', upcomingFolder);
project.addEventListener('click', createProject);

log(toDoList);

function inboxFolder() {
  content.textContent = '';
  content.append(addTask, form, toDoListWrapper);
}

function render() {
  toDoListWrapper.textContent = '';
  for (let i = 0; i < toDoList.length; i++) {
    createToDoList(toDoList[i]);
  }
}

function createToDoList(task) {
  const toDoList = document.querySelector('.toDoListWrapper');
  const newItem = document.createElement('div');
  newItem.classList.add('toDoList');
  toDoList.appendChild(newItem);

  const taskName = document.createElement('p');
  taskName.classList.add('taskFinish');
  taskName.textContent = task.title;

  const date = document.createElement('p');
  if (task.dueDate !== '') {
    date.textContent = task.dueDate;
  } else {
    date.textContent = 'No Due Date';
  }

  const project = document.createElement('p');
  project.innerHTML = `Project: <b>${task.inbox}<b>`;

  const priority = document.createElement('p');
  if (task.priority === 'High') {
    priority.innerHTML = `Priority: <b>${task.priority}<b>`;
    newItem.style.backgroundColor = 'rgb(240, 67, 67)';
  } else if (task.priority === 'Low') {
    priority.innerHTML = `Priority: <b>${task.priority}<b>`;
    newItem.style.backgroundColor = 'orange';
  } else {
    priority.innerHTML = `Priority: <b>${task.priority}<b>`;
  }

  // taskName.classList.add('toDoList');
  // date.classList.add('toDoList');
  // project.classList.add('toDoList');
  // priority.classList.add('toDoList');
  newItem.append(taskName, date, project, priority);
}

function todaysFolder() {
  content.textContent = '';
}

function upcomingFolder() {
  content.textContent = '';
}

let newProject = [];
const projectForm = document.querySelector('#projectForm');

function createProject() {
  log('hi');
  newProject.push(new Project(projectName.value));
  projectForm.style.display = '';
}

addTask.addEventListener('click', (e) => {
  form.style.display = '';
});

formSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  createInbox();
  render();
  form.reset();
  form.style.display = 'none';
});

cancelFrom.addEventListener('click', (e) => {
  e.preventDefault();
  form.style.display = 'none';
});

format(new Date(2014, 1, 11), 'yyyy-MM-dd');
//=> '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
log(dates.sort(compareAsc));
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
// function render() {

// }
