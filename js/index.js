'use strict';
const list = document.getElementById('list');
const listItemLoad = document.getElementById('listItemLoad');
let counter = 0;
const observer = new IntersectionObserver(funObserver);
function funObserver(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      addItems();
    }
  });
}
observer.observe(listItemLoad);

function addItems() {
  for (let i = 0; i < 20; i++) {
    list.prepend(createListItemLoad());
  }
  list.scrollTo(0, 800);
}

function createListItemLoad() {
  const liElem = document.createElement('li');
  liElem.classList.add('item');
  liElem.innerText = `Message ${++counter}`;
  return liElem;
}
