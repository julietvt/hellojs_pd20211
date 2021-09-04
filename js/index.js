'use strict';

// деструктуризация
const arr = ['val1', 'val2', 'val3', 'val4', 'val5', 'val6'];

const a0 = arr[0];
const a1 = arr[1];

const [el0, el1] = arr; // el0='val1', el1='val2'

//const [el0, el1, , el3] = arr;

const [firstEl, ...restArray] = arr;

//! сам массив никто не трогает

const arr2 = ['val1', [2, 5, 1, 5, 9, 4, 5], 'val3', 'val4', 'val5'];
// забрать 1
let [, [, , z3], ...rest] = arr2;
// забрать 9, 4, 5
//let [, [, , , , ...subrest], ...rest] = arr2;

// обьединение массивов
const myArray1 = [1, 2, 3, 4, 5];
const myArray2 = ['test1', 'test2', 'test3'];
let result = [...myArray1, ...myArray2];

// тоже но с уникальными значчениями

result = new Set([...myArray1, ...myArray2]);

// с обьектами

const obj1 = {
  fname: 'Tom',
  sname: 'Fox',
};

const obj2 = {
  fname: 'John',
  age: 20,
};

result = { ...obj1, ...obj2 };

console.log(result);

//
{
  age: 20;
  fname: 'John';
  sname: 'Fox';
}
