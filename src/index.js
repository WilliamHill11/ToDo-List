import { compareAsc, format } from 'date-fns';
import CreateTask from './Task';

let log = console.log;

const addTask = document.querySelector('.addTask');
const form = document.querySelector('#formID');
const formSubmit = document.querySelector('#formSubmit');
const cancelFrom = document.querySelector('#cancelForm');

// const cancelBtn = document.querySelector('.cancel');
// cancelBtn.addEventListener('click', removeForm);

// function removeForm() {
//   const form = document.querySelector('#formID');
//   form.style.display = 'none';
// }

addTask.addEventListener('click', (e) => {
  form.style.display = 'flex';
});

formSubmit.addEventListener('click', (e) => {
  e.preventDefault();
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
