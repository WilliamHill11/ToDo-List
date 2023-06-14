import Inbox, { createInbox, toDoList } from './Task';
import Project from './Project';
import { compareAsc, format } from 'date-fns';

let log = console.log;

export const content = document.querySelector('.content');
const addTask = document.querySelector('.addTask');
const form = document.querySelector('#formID');
const formSubmit = document.querySelector('#formSubmit');
const cancelFrom = document.querySelector('#cancelForm');
const inbox = document.querySelector('.inbox');
const todayEvents = document.querySelector('.today');
const upcomingEvents = document.querySelector('.upcoming');
const projectForm = document.querySelector('#projectForm');
const createNewProject = document.querySelector('.createProject');
const toDoListWrapper = document.querySelector('.toDoListWrapper');
const addProject = document.querySelector('#addProject');
const cancelProject = document.querySelector('#cancelProject');
const pageName = document.querySelector('.pageName');

inbox.addEventListener('click', inboxFolder);
todayEvents.addEventListener('click', todaysFolder);
upcomingEvents.addEventListener('click', upcomingFolder);

log(toDoList);

function inboxFolder() {
  content.textContent = '';
  pageName.textContent = 'inbox';
  content.append(pageName, addTask, form, toDoListWrapper);
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

  newItem.append(taskName, date, project, priority);
}

function todaysFolder() {
  content.textContent = '';
  pageName.textContent = 'Today';
  content.append(pageName, form);
  form.style.display = 'none';
}

function upcomingFolder() {
  content.textContent = '';
  pageName.textContent = 'Upcoming';
  content.append(pageName, form);
  form.style.display = 'none';
}

let newProject = [];

//Trying to create a event when clicking on project list
// const getProjectList = document.querySelector('li.projects');

// getProjectList.addEventListener('click', renderProject);

// function renderProject() {
//   log('hi dear!');
// }

document.body.addEventListener('click', (e) => {
  const target = e.target.closest('.projects');
  log(pageName);
  if (target) {
    // content.textContent = '';
    log(target.textContent);
    if (pageName.textContent !== '') {
      pageName.textContent = target.textContent;
    } else {
      pageName.textContent = '';
    }
  } else {
    log('nope');
  }
});

function createProject() {
  log(newProject);
  newProject.push(new Project(projectName.value));

  const projectList = document.createElement('li');
  const navBar = document.querySelector('nav');
  navBar.append(projectList);
  projectList.classList.add('projects');
  projectList.textContent = projectName.value;

  const projectCategory = document.querySelector('#inbox');
  // if (projectCategory === null) return;
  projectCategory.add(new Option(projectName.value, projectName.value));
  // log(projectCategory);

  projectForm.style.display = '';
}

//Trying to toggle bg color when on that folder
const navBar = document.querySelector('nav');
log(navBar);

addProject.addEventListener('click', (e) => {
  e.preventDefault();
  createProject();
  projectForm.reset();
  projectForm.style.display = 'none';
});

createNewProject.addEventListener('click', (e) => {
  projectForm.style.display = '';
});

cancelProject.addEventListener('click', (e) => {
  e.preventDefault();
  projectForm.style.display = 'none';
});

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
