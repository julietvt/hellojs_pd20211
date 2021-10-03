// 1 slider
const colorSlider = document.querySelector('.slider-color-boxes');
const slidesCount = colorSlider.querySelectorAll('div').length;
// 2 slider
const imgSlider = document.querySelector('.slider-images');
// control buttons
const upButton = document.querySelector('.btn-up');
const downButton = document.querySelector('.btn-down');
// container
const container = document.querySelector('.container');
// current slide index
let index = 0;

imgSlider.style.top = `-${(slidesCount - 1) * 100}vh`;
colorSlider.style.top = `-${(slidesCount - 1) * 100}vh`;

upButton.addEventListener('click', () => {
  moveToUpDown('up');
});

downButton.addEventListener('click', () => {
  moveToUpDown('down');
});

function moveToUpDown(dirMove) {
  if (dirMove == 'up') {
    index = (index + 1) % slidesCount;
  } else if (dirMove == 'down') {
    index = (index - 1 + slidesCount) % slidesCount;
  } else {
    console.error('Unknown parameter');
  }
  console.log('index = ', index);
  const offsetHeight = container.clientHeight;
  colorSlider.style.transform = `translateY(-${index * offsetHeight}px)`;
  imgSlider.style.transform = `translateY(${index * offsetHeight}px)`;
  console.log(colorSlider.style.transform);
  console.log(imgSlider.style.transform);
}
