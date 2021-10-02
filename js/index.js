const slides = document.querySelectorAll('.slide');

for (const item of slides) {
  item.addEventListener('click', () => {
    deleteStyleActive();
    item.classList.add('active');
  });
}

function deleteStyleActive() {
  slides.forEach((item) => {
    item.classList.remove('active');
  });
}
