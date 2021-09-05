// область видимости

/*
let userValue = prompt('userValue');

const test = 100;

switch (userValue) {
  case '1':
    {
      console.log(test);
    }
    break;
  case '2':
    {
      console.log(test);
    }
    break;
  case '3':
    {
      console.log(test);
    }
    break;
  case '4':
    {
      console.log(test);
    }
    break;
  default:
    {
      console.log(test);
    }
    break;
}
*/

/*
const test1 = 200;
if (true) {
  const test2 = 100;
  console.log('First out test1=', test1);
  console.log('First out test2=', test2);
}
console.log('Second out test1=', test1);
console.log('Second out test2=', test2);
*/

/*
const test = 200;
if (true) {
  const test = 100;
  console.log('First out', test);
}
console.log('Second out', test);
*/

/*
const test = 10;
if (true) {
  console.log(test);
}
*/

/*
if (true) {
  var test = 1000000;
  console.log(test);
}
console.log(test);
*/

/*
console.log(test);

if (true) {
  console.log(test);
  if (true) {
    test = 1;
    console.log(test);
    if (true) {
      console.log(test);
      if (true) {
        console.log(test); // undefined
        var test;
        test = 1000000;
        console.log(test); //1000000
      }
      console.log(test);
    }
    console.log(test);
  }
  console.log(test);
}
console.log(test);
/*
console.log(test2);
let test2 = 5;
console.log(test2);
*/

//console.log(this);

'use strict';

/*
function f() {
  test = 10;
}

f();
console.log(this);
*/

/*
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log('Result i=', i);
*/
/*
const test = 10;

function myFunction() {
  console.log(test);
  return 0;
}

const result = myFunction();
console.log(result);
*/

/*
function f() {
  return function () {
    //console.log('Hello');
    alert('hello');
  };
}

const result2 = f();
result2();
*/

/*
function f() {
  const x = 10;
  return function () {
    return x;
  };
}

//const result = f();
//result();

const resultFunction = f();
const result = resultFunction();
console.log(result);
*/

/*
function f() {
  let x = 10;
  return function () {
    return x++;
  };
}

const resultFunction = f();
console.log('resultFunction 1');
console.log(resultFunction());
console.log(resultFunction());
console.log(resultFunction());
console.log(resultFunction());
console.log(resultFunction());

const resultFunction2 = f();
console.log('resultFunction 2');
console.log(resultFunction2());
console.log(resultFunction2());
console.log(resultFunction2());
console.log(resultFunction2());
console.log(resultFunction2());
*/

/*
function f() {
  let x = 10;
  function test() {}
  return function () {
    test();
    x++;
  };
}
*/

/*
function f() {
  var x = 0;
}
if (false) {
  var x = 0;
}
f();

// каждый раз при вызове функции создается новое лексическое окружение

const test = 10;
function f() {
  if (true) {
    var value = test;
  }
}

f();

*/

function f(userValue) {
  ++userValue;
  console.log(userValue);
  return userValue;
}

let userValue = 5;
console.log(f(userValue));
