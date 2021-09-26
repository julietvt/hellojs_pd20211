const colors = document.querySelectorAll('label>input[type="range"]');
const BG_COLOR_KEY = 'BG_COLOR_KEY';
const COLORS_PATTERN = /[0-9.]{1,4}/g;

for (const i of colors) {
  i.oninput = updateBodyColor;
}

function updateBodyColor() {
  let value = 'rgba(';
  colors.forEach(function (range, index, list) {
    if (index == list.length - 1) {
      value += range.value + ')';
    } else {
      value += range.value + ',';
    }
  });
  localStorage.setItem(BG_COLOR_KEY, value);
  document.body.style.backgroundColor = value;
  console.log(value);
}

window.onload = function () {
  const value = localStorage.getItem(BG_COLOR_KEY);
  document.body.style.backgroundColor = value;
  const sliders = value.match(COLORS_PATTERN);
  sliders.forEach(function (value, index) {
    colors[index].value = value;
  });
};
