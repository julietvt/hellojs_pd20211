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
