import Inbox, { createInbox } from './Task';
import { compareAsc, format } from 'date-fns';

let log = console.log;

const content = document.querySelector('.content');
const addTask = document.querySelector('.addTask');
const form = document.querySelector('#formID');
const formSubmit = document.querySelector('#formSubmit');
const cancelFrom = document.querySelector('#cancelForm');
const inbox = document.querySelector('.inbox');
const todayEvents = document.querySelector('.today');
const upcomingEvents = document.querySelector('.upcoming');

inbox.addEventListener('click', inboxFolder);
todayEvents.addEventListener('click', todaysFolder);
upcomingEvents.addEventListener('click', upcomingFolder);

function inboxFolder() {
  content.textContent = '';
  content.append(addTask, form);
}

function createToDoList() {
  const toDoList = document.createElement('div');
  toDoList.classList.add('toDoListWrapper');
  content.append(toDoList);

  const newItem = document.createElement('div');
  newItem.classList.add('toDoList');
  newItem.textContent = 'Good Morning';
  toDoList.appendChild(newItem);
}

function todaysFolder() {
  content.textContent = '';
}

function upcomingFolder() {
  content.textContent = '';
}

addTask.addEventListener('click', (e) => {
  form.style.display = '';
});

formSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  createInbox();
  createToDoList();
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
