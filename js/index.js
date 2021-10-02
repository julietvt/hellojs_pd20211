const btnEl = document.getElementById('btn');
const listTask = document.getElementById('tasks');
const inputEl = document.getElementById('task');

btnEl.addEventListener('click', addTask);
//let counter = 0;

function addTask(e) {
  const item = document.createElement('li');
  //item.innerHTML = '<p>Hello' + `${++counter}` + '</p>';
  item.innerHTML = inputEl.value;
  listTask.append(item);
}
