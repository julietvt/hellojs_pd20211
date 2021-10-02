/*
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
    newTask.append(addContentItem());
    tasks.append(newTask);
    document.querySelector('.input-form').value = '';
  }
}

function addContentItem() {
  const tElem = document.createElement('div');
  tElem.classList.add('time');
  const time = new Date();
  tElem.textContent =
    time.getFullYear() + '.' + time.getMonth() + '.' + time.getDate();
  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'checkBox';
  tElem.appendChild(checkBox);
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('removeBtnStyle');
  removeBtn.addEventListener('click', function (e) {
    console.log(this.parentNode.parentNode);
    this.parentNode.parentNode.remove();
  });
  tElem.appendChild(removeBtn);
  return tElem;
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
*/
