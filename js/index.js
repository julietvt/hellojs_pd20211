// object & function
/*
const user = {
  name: 'Tom',
  surname: 'Fox',
  age: 20,
  lang: ['ua', 'eng', 'sp'],
  car: {
    name: 'name_car',
    model: 'model_car',
    year: 2021,
    engine: { name: 'engine100', year: 2021 },
  },
  greeting1: function () {
    console.log('Hello!');
  },
  greeting2: function () {
    console.log(`Hello, ${this.name} !!`);
  },
  outThis: function () {
    console.log(this);
  },
};

user.greeting1();
user.greeting2();

console.log(this); // window
user.outThis(); // tom fox

// функции конструкторы

function stud(name, surname) {
  this.name = name;
  this.surname = surname;
}

const Vasya = new stud('Vasya', 'Petrov');
const Masha = new stud('Masha', 'Petrova');
const Petya = new stud('Petya', 'Ivanov');

console.log(Vasya);
console.log(Masha);
console.log(Petya);

console.log(Vasya.name);
console.log(Vasya.surname);

function rect(size1, size2) {
  this.a = size1;
  this.b = size2;
  this.square = function () {
    return this.a * this.b;
  };
}

const rect1 = new rect(2, 5);
console.log(rect1);
console.log(rect1.square());

function buy(count, price) {
  this.count = count;
  this.price = price;
  this.sum = 0;
  this.sale = function (totalSum, procent) {
    this.sum = this.count * this.price;
    if (this.sum > totalSum) return this.sum * (1 - procent * 0.01);
    return this.sum;
  };
}

const buy1 = new buy(5, 200);
console.log(buy1.sale(500, 3));

//**************** */

// ООП обьектно-ориентированное программирование
// обьект  класс
// класс = кот , обьекты (экземпляр класс) = Барсик, Маша, Сима....
// класс = студент , обьекты  = Вася Иванов, Петя Сидоров , .....

class cat {
  // функция конструктор класс создает обьект
  constructor(name) {
    this.name = name;
  }
}

const Barsik = new cat('Barsik');
const Masha2 = new cat('Masha');

console.log(Barsik);
console.log(Masha2);

class stud {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  /*
  constructor() {
    this.name = 'Vasya';
    this.surname = 'Petrov';
    this.age = 17;
  }
  */
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const stud1 = new stud('name1', 'surname1', 20);
const stud2 = new stud('name2', 'surname2', 20);
const stud3 = new stud('name3', 'surname3', 20);
const stud4 = new stud('name4', 'surname4', 20);

console.log(stud4.getFullName());

// класс треугольник

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  perimeter() {
    return this.a + this.b + this.c;
  }
  square() {
    let p = (this.a + this.b + this.c) / 2;
    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

let obj1 = new Triangle(2, 4, 5);
console.log(obj1.perimeter());
console.log(obj1.square());
