const input = document.querySelector('.input-form');
const add = document.querySelector('.addButton');
const del = document.querySelector('.delButton');
const tasks = document.querySelector('.tasks');

add.addEventListener('click', addTask);
del.addEventListener('click', delTask);

function addTask() {
  let data = input.value;
  if (data <= 0) {
    alert('Nothing entered');
  } else {
    let newTask = document.createElement('li');
    newTask.classList.add('taskElem');
    newTask.innerHTML = input.value;
    newTask.append(addCheck());
    tasks.append(newTask);
    document.querySelector('.input-form').value = '';
  }
}

function addCheck() {
  const timeElem = document.createElement('div');
  timeElem.classList.add('time');
  const time = new Date();
  timeElem.textContent =
    time.getFullYear() + '.' + time.getMonth() + '.' + time.getDate();
  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'checkBox';
  timeElem.appendChild(checkBox);
  return timeElem;
}

function delTask() {
  const deleteTasks = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  if (deleteTasks) {
    for (let item of deleteTasks) {
      item.parentNode.parentNode.remove();
    }
  }
}
