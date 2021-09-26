// location
//console.log(location);

const locationEl = document.getElementById('location');

for (let i in locationEl) {
  if (typeof locationEl[i] == 'string') {
    console.log(`${i} = ${locationEl[i]}`);
    const listItem = document.createElement('li');
    listItem.innerText = `${i} = "${locationEl[i]}"`;
    locationEl.append(listItem);
  }
}

// методы
// reload() перезагрузка страницы
// replace() старая не добавляется
// assign() новая добавляется

const reloadBtn = document.getElementById('reload');
reloadBtn.addEventListener('click', function () {
  location.reload();
});

// origin `${location.origin}`
