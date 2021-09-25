/*
const test = {};

//1
test.name = 'test name';
//2
test['surname'] = 'some surname';

// числовые свойства
//ошибка ! test.0='name0';
test[0] = 'name0';

// вычисляемые свойства 

const userName = 'Tom';
const userId = 12345;
const obj1 = {};

obj1[userName + userId] = 'object user1';

console.log('Test object:', test);
console.log(obj1);

const value = obj1[userName + userId];

console.log('*****************');

for (let i in test) {
  console.log('obj1.' + i + ' = ' + test[i]);
}

console.log('*****************');

let arr = [10, 20, 30];
arr.name = 'hello';
for (let i in arr) {
  console.log(i);
}
console.log('*');
for (let i of arr) {
  console.log(i);
}
*/

function myArray() {
  this.length = 0;
}

const arrayProto = new myArray();

arrayProto.push = function push() {
  for (let value of arguments) {
    this[this.length++] = value;
  }
  return this.length;
};

arrayProto.pop = function pop() {
  if (this.length > 0) {
    const result = this[--this.length];
    delete this[this.length];
    return result;
  }
};

myArray.prototype = arrayProto;
