'use strict';
/*
Level 1
1. Подсчитать сумму нечётных элементов массива
2. Вывести индексы нулевых элементов массива
3. Даны два массива. Объедините их и преобразовав в строку.
5. отфильтруйте массив, удалив все нули
6. создайте и опишите объект worker с вложенным объектом edu который описывает образование. выведите сам объект в консоль, выведите уровень образования
7. перепишите предыдущее задание6 на класс


Level 2 *
1. Отфильтруйте массив, удалив все нули. Преобразуйте результат в строку.
2. Создайте карту map для списка пользователей. Каждый пользователь представляет собой отдельный объект со свойствами id, name, surname. В качестве ключа выбрать id  
3. Напишите функцию перевода строки в верблюжий регистр
4. Проверьте является ли слово палиндромом (например "abcddcba")
5. Создайте и опишите объект worker. добавьте в него следующие функции(встроенные методы) : вывести ФИО, начислять доплату 5% если выслуга лет больше 5 лет и 10% если выслуга лет больше 8 лет
6. Перепишите предыдущее задание5 на класс
*/

/*
let arr = [2, 3, -1, 0, 0, 4, 7, -2, -3, 0, 1, 2];
//0  1   2  3  4  5  6   7   8  9  10  11
let i, j;
let result;
// 1.1 Подсчитать сумму нечётных элементов массива
//1
let sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    sum += arr[i];
  }
}
console.log(sum);
//2
result = arr.filter((elem) => elem % 2 != 0);
const reducer = (previousValue, currentValue) => previousValue + currentValue;
sum = arr.reduce(reducer);
// arr.filter((elem) => elem % 2 != 0).reduce((prVal, cVal) => prVal + cVal);

//Вывести индексы нулевых элементов массива
function task_1_2(arr) {
  let indexes = [];
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      indexes[j] = i;
      j++;
    }
  }
  return indexes;
}
//2
let indexes = [];
let idx = arr.indexOf(0);
while (idx != -1) {
  indexes.push(idx);
  idx = arr.indexOf(0, idx + 1);
}
console.log(indexes);

// 1.3 Даны два массива. Объедините их и преобразовав в строку.
function taska_1_3(arr1, arr2) {
  return [...arr1, ...arr2].join('');
  //return arr1.concat(arr2).join('');
}

// 1.5создайте и опишите объект worker с вложенным объектом edu который описывает образование. выведите сам объект в консоль, выведите уровень образования
const worker = {
  name: 'John',
  age: 30,
  nationality: 'American',
  experience: '10 years',
  edu: {
    univesity: {
      name: 'Massachusetts Institute of Technology',
      abbr: 'MIT',
    },
    degree: 'master',
  },
  religion: 'ortodox',
  MS: 'married',
};

console.log(worker);
console.log(worker.edu);
//const {edu: { univesity },} = worker;
//const {edu_worker} = worker;
//console.log({ edu_worker });

class Worker {
  constructor(name, age, edu) {
    this.name = name;
    this.age = age;
    this.edu = edu;
  }
}

let user1 = new Worker('Tom', 20, {
  univesity: {
    name: 'Massachusetts Institute of Technology',
    abbr: 'MIT',
  },
});

// task 2.3. Напишите функцию перевода строки в верблюжий регистр
let str1 = 'hello java script'; // 'helloJavaScript'
let words = str1.toLowerCase().split(' ');
for (i = 1; i < words.length; i++) {
  //words[i] = String.fromCharCode(words[i].charCodeAt(0)-'0x20');
  words[i][0].toUpperCase();
}
result = words.join('');

//2.4 task polindrom

function palindromCheck(str) {
  const part1 = str.slice(0, str.length / 2);
  const part2 = str
    .slice(str.length / 2)
    .split('')
    .reverse()
    .join('');

  if (part1.localeCompare(part2) == 0) {
    console.log('Строка является палиндромом!');
  } else {
    console.log('Строка не является палиндромом!');
  }
}

// 'hello js'
// 'hel loj s'
// hel ==> leh
// if('leh' == 'loj') false

// 'abcddcba'
// abcd  ==> dcba

//2.5 task
const woker1 = {
  firstName: 'Ivan',
  secondName: 'Ivanovych',
  surname: 'Ivanov',
  printFullName: function () {
    console.log(this.firstName + ' ' + this.secondName + ' ' + this.surname);
  },
  workingAge: 11,
  yearHire: 2020,
  salary: 10000,
  salaryCount: function () {
    if (this.workingAge > 5 && this.workingAge < 8) {
      console.log('Ваша зарплата: ', this.salary * 1.05);
    } else if (this.workingAge >= 8) {
      return console.log('Ваша зарплата: ', this.salary * 1.08);
    } else {
      console.log('Ваша зарплата: ', this.salary);
    }
  },
  updateExperience() {
    let curY = new Date().getFullYear();
    this.workingAge = curY - this.yearHire;
  },
};

*/
