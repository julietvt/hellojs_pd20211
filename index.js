/*
alert('Начало блока try');

x;

alert('Конец блока try (никогда не выполнится)');
*/
/*
try {
  alert('hello');
  alert(s);
} catch (e) {
  alert('Возникла ошибка!');
  //alert(e.name + ': ' + e.massage);
  alert(e);
}
*/
/*
try {
  alert('Начало блока try');
  x;
  alert('Конец блока try (никогда не выполнится)');
} catch (err) {
  alert(`Возникла ошибка!`);
} finally {
  alert('finally');
}
*/

//явно сгенерировать какойто исключение
//throw выражение;

/*
let card1 = 800;
let card2 = 5000;
let sum = 1000;
try {
  //if (card1 < sum) throw new Error('balance must be bigger than 0');
  if (card1 < sum) {
    const errorBalance = new Error('balance must be bigger than 0');
    throw errorBalance;
    card1 -= sum;
    card2 += sum;
  }
} catch (error) {
  console.log(error);
} finally {
  console.log('finally stage');
  console.log(`card1: ${card1}, card2: ${card2}`);
}
*/

class checkColor {
  constructor(value) {
    if (value < 0 || value > 255)
      throw new RangeError(
        'color value must be bigger than 0 and less than 255'
      );
    if (isNaN(value)) throw new TypeError('Color value must be a number');
    this.value = value;
  }
  out() {
    console.log(`Color value is ${this.value}`);
  }
}

const color1 = new checkColor(100);
color1.out();
//const color2 = new checkColor(-10);
//color2.out();
//const color3 = new checkColor(500);
//color3.out();
const color4 = new checkColor('hello');
color4.out();
