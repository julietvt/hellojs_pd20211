'use strict';
/*
// переписать массив наоборот (перевернуть массив)

let array1 = [1, 2, 3, 4, 5];

//1
function reverseArray(arr) {
  let resArray = [];
  for (let i = 0, j = arr.length - 1; j >= 0; i++, j--) {
    resArray[i] = arr[j];
  }
  return resArray;
}

console.log(reverseArray(array1));

//2
console.log(array1.reverse());

// Вернуть первые N элементов массива
// Вернуть последние N элементов массива
// наути сумму элементов массива (* произведений, сумма квадратов)
// вернуть случайный элемент массива
// развернуть массив наоборот
// переместить элемент массива из одной позиции в другую (без сдвига)

function task1(arr, n) {
  return arr.slice(0, n);
}

function task2(arr, n) {
  return arr.slice(-n);
}

// [1,2,3,4,5] 1*2*3*4+5
//+
const reducer = (sum, value) => sum + value;
let resultArrayTask3 = array1.reduce(reducer);
console.log(resultArrayTask3);
//*
const reducer2 = (mult, value) => mult * value;
console.log(array1.reduce(reducer2));
// 1^3 + 2^3 + 3^3 + 4^3 + ...
const reducer2_2 = (sum, value) => sum + value ** 3;
console.log(array1.reduce(reducer2_2));

function task3(arr, power) {
  const reducer = (sum, value) => sum + value ** power;
  return arr.reduce(reducer);
}

//вернуть случайный элемент массива

function task4(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

//переместить элемент массива из одной позиции в другую (без сдвига)

//1
function ReplaceElements(array, index1, index2) {
  let secondElement = array[index2];
  array.splice(index2, 1, array[index1]);
  array.splice(index1, 1, secondElement);
  return array;
}

ReplaceElements(array1, 0, 4);
console.log(array1);
//2

function ReplaceElements2(array, index1, index2) {
  return array.splice(index1, 0, array.splice(index2, 1)[0]);
}

//отфильтруйте массив, удалив все отрицательные и нулевые элементы

function task7(array) {
  array.filter((el) => el > 0);
  return array;
}

let array3 = [0, 1, -2, 0, 3, -4, 0, 5, -100, 5, 9];

[1, 3, 5, 5, 9];

function task7_for(array) {
  let i,
    j = 0,
    res = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      res[j] = array[i];
      j++;
    }
  }
  return res;
}

let resultTask7 = task7_for(array3);
console.log(resultTask7);

//
array1
  .reverse()
  .concat(array2)
  .splice(index1, 0, array1.splice(index2, 1)[0])
  .filter((el) => el > 0);
*/

// Set множество
let Set1 = new Set([1, 2, 3, 4, 5]);
let Set2 = new Set([1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 5]);
let Set3 = new Set([1, 1, 1, 1, 2, 2, , , , , 2, 3, 4, , , 5, 5]);
console.log(Set1);
console.log(Set2);
console.log(Set3);

// добавлять
Set1.add(6);
Set1.add('hello');
Set1.add('hello'); // игнор
console.log('Set1:', Set1);

let Set4 = new Set(['a', 'b', 'ccc', 'dd', 'e']);
Set4.add('ff');
console.log('Set4:', Set4);

//objects
let Set5 = new Set([{ name: 'Masha' }, { name: 'Petya' }]);
Set5.add({ name: 'Vasya' });
console.log('Set5:', Set5);

let Set6 = new Set([{ name: 'test' }, { name: 'test' }]);
console.log('Set6', Set6);

const obj = { name: 'test' };
let Set7 = new Set([obj, obj, obj, obj]);
console.log('Set7:', Set7);

// содержится ли элемент
console.log(Set1.has(1));
console.log(Set1.has(3));
console.log(Set1.has(100));

// очистить множество
Set2.clear();

// удаление значения
console.log(Set1);
Set1.add(100);
console.log(Set1);
Set1.delete(100);
console.log(Set1);

//Map
const Map2 = new Map();

Map2.set('Ann', 20);
Map2.set('Tom', 22);

Map2.get('Tom');
Map2.get('Ann');

const objkey = { name: 'test' };
Map2.set(objkey, 'some_value');

Map2.set('Ann', 10);
Map2.set('Fox', 10);
Map2.set('Ann', 50);
Map2.set('Ann', 'hello');

/*
//delete
Map2.delete('Ann');

Map2.clear();
*/
