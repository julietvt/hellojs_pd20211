/* Intersection Observer
ленивая загрузка изображений видео др контента
бесконечный скролл
запуск рекламы , процесса, скрипта 

let options = {
  root : // корневой элемент - родитель или viewport (null или не указываем эту опцию )
  threshold: // порог пересечения 0...1
  rootMargin: // поля вокруг корневого элемента 
}

let callbackFun = function(){}

let observer = new IntersectionObserver(callbackFun, options);

let target = document.getElementById('some_target');

observer.observe(target);

*/

const options = { root: null, threshold: 1, rootMargin: '20px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //console.log('entry:', entry);
    entry.target.classList.add('active');
    entry.target.innerHTML = '<p>Block was loaded</p>';
    observer.unobserve(entry.target);
  });
}, options);

const targetCollectionElements = document.querySelectorAll('.back');
for (let target of targetCollectionElements) {
  observer.observe(target);
}
