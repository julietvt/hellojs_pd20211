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

/*
class checkColor {
  constructor(colors) {
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
*/
/*
1 const r=100, g=150, b=120          
const color1 = new checkColor(r,g,b);
constructor(r,g,b)

2 const arrayColors = [100,150,120]  
const color1 = new checkColor(arrayColors);
constructor(arrayColors)
arrayColors[0]
arrayColors[1]
arrayColors[2]

3 const objColors = {red: 100, green:150, blue: 120} 
const color1 = new checkColor(objColors)
constructor(objColors)
const [r,g,b] = 


*/

/*
try {
  const color1 = new checkColor();
  color1.out();
} catch (e) {
  console.log(e);
}
*/

/*
try {
  const color1 = new checkColor(100);
  color1.out();
} catch (e) {
  console.log(e);
}
try {
  const color2 = new checkColor(-10);
  color2.out();
} catch (e) {
  console.log(e);
}
try {
  const color3 = new checkColor(500);
  color3.out();
} catch (e) {
  console.log(e);
}
try {
  const color4 = new checkColor('hello');
  color4.out();
} catch (e) {
  console.log(e);
}

*/
// пример серверверные ошибки
// status дополнитеный параметр (нет в Error!!!)

/*
class ApplicationError extends Error {
  constructor(status, message) {
    super();
    this.message = message || 'Internal server error (app error)';
    this.status = status || 500;
  }
}

class BadRequestError extends ApplicationError {
  constructor() {
    super(400, 'bad request');
  }
}

class ExpectationFailedError extends ApplicationError {
  constructor() {
    super(417, 'Expectation Failed');
  }
}
*/

//Range Validator

class RangeValidator {
  constructor(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number')
      throw new TypeError('wrong type');
    if (start > end) throw new RangeError('range error start > end');
    this._start = start;
    this._end = end;
  }
  set start(value) {
    if (typeof value !== 'number') throw new TypeError('wrong type');
    if (value > end) throw new RangeError('range error start > end');
    this._start = value;
  }
  set end(value) {
    if (typeof value !== 'number') throw new TypeError('wrong type');
    if (value < start) throw new RangeError('range error start > end');
    this._end = value;
  }
  get start() {
    return this._start;
  }
  get end() {
    return this._end;
  }
  numberValidate(numberV) {
    if (typeof numberV !== 'number') throw new TypeError('wrong type');
    return numberV >= this._start && numberV <= this._end;
  }
}

const range1 = new RangeValidator(50, 100);
range1.numberValidate(75);
