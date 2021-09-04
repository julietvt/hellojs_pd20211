'use strict';

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
