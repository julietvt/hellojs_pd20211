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
  colorSlider.style.transform = `translateY(${index * offsetHeight}px)`;
  imgSlider.style.transform = `translateY(${index * offsetHeight}px)`;
  console.log(colorSlider.style.transform);
  console.log(imgSlider.style.transform);
}

/*
function down(){
    const activeItem = document.querySelector(".active");
    activeItem.classList.remove("active");
    index++;
    imgSlider[index].classList.add("active");
}


buttonDown.addEventListener("click", down);

------


.slide{
  position: absolute;
  z-index:2;
}
.slide.active{
  transition: outline 0.2s linear;
  z-index: 15;
}
*/

/*
//3 

arrayBack = [' linear-gradient(220.16deg, #FFE101 -8%, #F39102 138%)',' linear-gradient(220.16deg, #FFE101 -8%, #F39102 138%)']

arrayBack = [[220,100,100],[50,20,100]]

arrayImg = ['some.www/img1.jpg','some.www/img1.jpg','some.www/img1.jpg']


<div class="container">
        <div class="slider-color-boxes">
                <h2>Snow passion</h2>
                <p>Love & passion</p>
        </div>
        <div class="slider-images">
        </div>
        <div class="controlsBtn">
            <button class="btn-down">
                <i class="fas fa-arrow-down"></i>
            </button>
            <button class="btn-up">
                <i class="fas fa-arrow-up"></i>
            </button>
        </div> 
    </div>
    
  const colorSlider = document.querySelector('.slider-color-boxes'); 
  const imgSlider = document.querySelector('.slider-images');

  imgSlider.style.background

  arrayBack[index]
  arrayImg[index]

  */
