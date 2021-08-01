//коментарий
// комант для одной строки
/* блок кода */

//alert('Hello, JavaScript!!!');

console.log('Hello JS!');

let x;
let a, b;
console.log(x);
x = 5;
console.log('x=', x);
console.log(x, a, b);
a = 'world';
b = 0.77;
console.log(x, a, b);

let userName;
userName = 'Vasya';
console.log(userName);

let userAge = 100;
console.log(userAge);

let name = 'Ivan',
  age;
age = 20;
console.log(name, age);

const COLOR_CAR = 'RED',
  FIRST_USER = 'Vasya';
console.log(COLOR_CAR, FIRST_USER);

x = 100;
console.log(x);
x = 200;
console.log(x);
x = b; // теперь х равно b - значение b присваивается для х
console.log(x);
let x2 = 1000;
x = x2;
console.log('x=', x, 'x2=', x2);

/*
Здесь будет ошибка! константу нельзя повторно инициализировать
COLOR_CAR = 'BLUE';
console.log(COLOR_CAR);
*/

const X_CONST = 200;
console.log('x (before) =', x);
x = X_CONST;
console.log('x (after) =', x);
/* ощибка : повторная инициализация, присваение невозможно константе
X_CONST = x;
console.log('X_CONST (after) =', X_CONST);
*/

/*
числа 1 100 -200 0 0.3333 
строки 'hello world !!! ++ 556 sd' "red car"
логический тип  true, false (0 и 1)
объекты {}
*/
console.log('---------------');
let a1, a2, result;
a1 = 100;
a2 = 200;
result = a1 + a2;
console.log(result);
result = a1 - a2;
console.log(result);
result = a1 * a2;
console.log(result);
result = a1 / a2;
console.log(result);

console.log('---------------');
result = a1 + 4;
console.log(result);
result = a1 - 1.2;
console.log(result);
result = a1 * 0.5;
console.log(result);
result = a1 / 1000;
console.log(result);

console.log('---------------');
console.log(x);
x = x + 1;
console.log(x);
x = x - 1;
console.log(x);
x = x / 10;
console.log(x);
x = x * 6;
console.log(x);

console.log('---------------');
// инкремент x = x + 1 это тоже самое что х++
let result3;
result3 = x;
console.log(result3);
x++;
result3 = x;
console.log(result3);

// декремент x = x - 1 это тоже самое что х--
console.log(result3);
result3 = --x;
console.log(result3);

/*Задача перевести кг в граммы*/
let valueKg, valueGr;
const DEFAULT_VALUE_KG = 50;
valueKg = prompt('Введи значение в кг', DEFAULT_VALUE_KG); // спрашиваем у пользователя значение в кг
valueGr = valueKg * 1000;
console.log('Result is ', valueGr, 'gr');
