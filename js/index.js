/* Обьекты */
// имя_объекта.имя_свойства

const user1 = {};

console.log(user1);

console.log(typeof user1);

const user2 = {
  firstName: 'Vasya',
  lastName: 'Ivanov',
  workExperience: 0,
  isMale: true,
};

console.log(user2);

console.log(typeof user2);

console.log(user2.firstName, user2.lastName);

// добавление нового свойства
user2.category = 'junior';
console.log(user2);

user2.workExperience = 1; // изменение свойства для обьекта
console.log(user2);

user2_copy = user2;
console.log(user2);

const user3 = {
  firstName: 'Jack',
  lastName: 'Sparrow',
  isMale: true,
  sayHello: function () {
    console.log('Hello! My name is ', this.firstName, ' ', this.lastName);
  },
  doGreeting: function (someUser) {
    console.log('Hi, ', someUser.firstName, '!!!');
  },
  sayHelloUser2: function () {
    console.log('Hello! User2: ', user2.firstName, ' ', user2.lastName);
  },
  outThisObject: function () {
    console.log(this);
  },
};

console.log(user3);
console.log(user3.sayHello());
console.log(user3.sayHelloUser2());
console.log(user3.outThisObject());
console.log(user3.doGreeting(user2));

const user4 = {
  0: 'Vasya',
  1: 'Ivanov',
  2: 0,
  3: true,
};
console.log(user4);
// console.log(user4.0); ошибка!

console.log(user4[0]);
console.log(user4[1]);
console.log(user4[2]);
console.log(user4[3]);

//console.log(user3['firstName']);

// удалить свойство обьекта
delete user3.category;
console.log(user3);

function mySum(a, b) {
  return a + b;
}

function helloWithUser(user) {
  console.log('Hello user ', user.firstName, user.lastName);
}

console.log('Funciton helloWithUser');
helloWithUser(user1);
helloWithUser(user2);
helloWithUser(user3);

const car = {
  model: 'mazda',
  color: 'red',
  year: 2020,
  engine: {
    volume: 2.0,
    year: 2019,
    typet: {
      name: 'some_name',
    },
  },
};
/*
car.model
car.engine
car.engine.volume
car.engine.typet.name
*/

/*
let s = 0,
  i;
for (i = 1; i <= 10; i = i + 1) {
  s += i;
}
*/

console.log('Object car:', car);

for (let i in car) {
  console.log(i);
  console.log(car[i]);
}

/*
МАССИВЫ
нумерация элементов начинается с нуля

для обращения к элементу массива 
массив[индекс]

*/

//1 2 3 4 5 6 7 8 9 10
/*
x1 = 1;
x2 = 2;
x3 = 3;
...


количество элементов / размер массива
массив.length
*/

let i;

let someObj = {}; // пустой объект
someObj.property1 = 'hello';
someObj.property2 = 100;

let someArray = []; // пустой массив

let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
arr1[0] = 1000;
console.log(arr1);
let sum_firstEl_and_SecondEl = arr1[0] + arr1[1];
console.log(sum_firstEl_and_SecondEl);

let arr2 = ['name1', 'name2', 'hello', 'str'];
console.log(arr1.length);
console.log(arr2.length);

arr1[10] = -2;
//arr1[arr1.length] = -2

// сумма массива
let sumArray1 = 0;
for (i = 0; i < arr1.length; i++) {
  sumArray1 += arr1[i];
}
console.log('Sum array1 is ', sumArray1);

/*

Функции

1 function definition

function mySum(a,b){
  return a+b;
}

2 function arrow стрелочная

const mySum = (a,b) => {
  return a+b;
};
сокращенный вариант
const mySum = (a,b) => a+b;

3 function expression

const mySum = function(a,b){
  return a+b;
};
*/

const arrayMult = (arr) => {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

//const result1 = arrayMult(arr1);
const result2 = arrayMult([1, 2, 3, 4]);
console.log(result2);

const arrayOut = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

let arr3 = [
  'Maria',
  10,
  true,
  { role: 'user' },
  function () {},
  () => {
    console.log('hello');
  },
];

// пропуск элемента массива ,
let arr4 = [, , , , , ,];
console.log('array4');
console.log(arr4);
let arr5 = [100, , , , , ,];
console.log('array5');
console.log(arr5);
let arr6 = [100, , , 400, 500, , , , 900];
console.log('array6');
console.log(arr6);

// инициализация массива пустыми обьектами
let arr7 = {};
for (i = 0; i < 5; i++) {
  arr7[i] = {};
}

// функция которая находит минимум массива

const searchMinArray = (arr) => {
  let i,
    min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
/*
10 20 5 8 1 9
min=10
i=0 10<min ?
i=1 20<min ?
i=2 5<min? yes min=5
i=3 8<min? no
i=4 1<min? yes (1<5) min=1
i=5 9<min (9<1) no
return min=1
*/

// функция которая находит максимум массива

const searchMaxArray = (arr) => {
  let i,
    max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

/*
функция 
1 вычислить сумму четных элементов массива

2 вернуть общий массив без повторов
array.sort()

3 которая дополняет число заданным количеством нулей
fun(-5,6) вернет -0000005

*/

const functionTask1 = (array) => {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }
  return res;
};

//собрать из двух массивов один
/*
1 2 3 4 5 array1.length=5 счетчик i
10 20 30  array2.length=3 счетчик j
1 2 3 4 5 10 20 30
*/
const functionTask2 = (array1, array2) => {
  for (let i = array1.length, j = 0; j < array2.length; i++, j++) {
    array1[i] = array2[j];
  }
  return array1;
};
const functionTask3 = (number, countZeros) => {
  let i,
    resultArray = [];
  if (number < 0) {
    resultArray[0] = '-';
  } else {
    resultArray[0] = '+';
  }
  for (i = 1; i <= countZeros + 1; i++) {
    resultArray[i] = 0;
  }
  resultArray[i] = Math.abs(number);
  return resultArray;
};

console.log('******** Array ***********');
/*
стандартный обьект Array
*/

// forEach() выполняет указанную функцию для каддого элемента массива

// для каждого элемента выполнить console.log()

const myArray = [10, 20, 30, 40, 50];
// 1
myArray.forEach((i) => console.log(i));
// 2
function outNumber(number) {
  console.log(number);
}
myArray.forEach(outNumber);

// возвести в квадрат каждый элемент массива
//1
myArray.forEach((i) => Math.pow(i, 2));
//2
function powNumber(number) {
  return number ** 2;
}
myArray.forEach(powNumber);
//3

function funPowArray(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] ** 2;
  }
  return array;
}

// filter метод
// создает новый массив со всеми элементами прошедшими проверку по данной функции

// создать массив из чисел которые больше 30
const myArrayWithNumberBigger30 = myArray.filter((i) => i >= 30);

//есть массив слов. вывести слова которые больше 5 символов
const words = [
  'hello',
  'car',
  'transition',
  'transaction',
  'html',
  'css',
  'java script',
];
const res_words = words.filter((i) => i.length >= 5);
//2
function chechLengthWords(word) {
  if (word.length >= 5) return true;
  else return false;
}
const res_words2 = words.filter(chechLengthWords);

// every метод
// проверяет чтобы все элементы массива прошли выполнени условия (условие описано в функции)

myArray.every((i) => i >= 18);
// some метод
// проверяет чтобы хотя бы 1 элемент массива прошли выполнени условия (условие описано в функции)
myArray.some((i) => i >= 18);

// проверить все ли элементы массива четные ?
myArray.every((i) => i % 2 == 0);
//2
function isNumberEven(number) {
  if (number % 2 == 0) return true;
  return false;
}
myArray.every(isNumberEven);
