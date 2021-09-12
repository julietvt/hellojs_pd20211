/*
class User {
  constructor(name, surname, age, isMale = false) {
    this._name = name;
    this._surname = surname;
    this.age = age;
    this.isMale = isMale;
  }
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

  checkAge(value) {
    if (this.age >= value) return true;
    return false;
  }
  outFullName() {
    return `${this._name} ${this._surname}`;
  }
}

class Buyer extends User {
  constructor(name, surname, age, isMale = false) {
    super(name, surname, age, isMale);
  }
  outFullName() {
    //super.outFullName();
    //console.log("I'm buyer " + super.outFullName());
    console.log('Some full name');
  }
}

class Seller extends User {
  constructor(name, surname, age, isMale = false) {
    super(name, surname, age, isMale);
  }
}

const user1 = new User('Ivan', 'Ivanov', 20);
const user2 = new User('Ann', 'Ivanova', 20, true);

console.log(user1);
console.log(user1.outFullName());
console.log(user1.checkAge(18));
console.log(user2);
console.log(user2.outFullName());
console.log(user2.checkAge(18));

const buyer1 = new Buyer('Tom', 'Fox', 20);
const seller1 = new Seller('John', 'Smith', 20);

console.log(buyer1);
console.log(buyer1.outFullName());
*/

/*   Задание 1. Реализовать класс RangeValidator со следующими свойствами: 
■ from (number); 
■ to (number).
Реализовать getter'ы и setter'ы для обоих свойств. 
Реализовать getter range, который будет возвращать массив с двумя числами диапазона. 
Реализовать метод validate, который будет принимать число и проверять входит ли 
число в указанный диапазон. 
 */

class RangeValidator {
  // счетчик экземпляров класса
  static counter = 0;

  #from = 0;
  #to = 0;
  constructor(fromNumber, toNumber) {
    this.#from = fromNumber;
    this.#to = toNumber;
    RangeValidator.counter++;
  }
  get to() {
    return this.#to;
  }
  get from() {
    return this.#from;
  }
  set to(toNumber) {
    this.#to = toNumber;
  }
  set from(fromNumber) {
    this.#from = fromNumber;
  }
  get range() {
    return [this.#from, this.#to];
  }
  validate(value) {
    if (value >= this.#from && value <= this.#to) return true;
    return false;
  }
  static getCounter() {
    return this.counter;
  }
}

const range1 = new RangeValidator(10, 15);
console.log(range1.from);
console.log(range1.to);
//console.log(range1.from(100));
//console.log(range1.to(120));
console.log(range1.validate(12));
console.log(range1.validate(101));
console.log(range1.validate(150));
console.log(RangeValidator.getCounter());
