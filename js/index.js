'use strict';

// условие if-else
// циклы for() , while(i<100), do-while

// конструкция switch

/*
let x = prompt();

if (x == 1) {
  alert('User have entered 1');
} else if (x == 2) {
  alert('User have entered 2');
} else if (x == 3) {
  alert('User have entered 3');
} else if (x == 4) {
  alert('User have entered 4');
} else if (x == 5) {
  alert('User have entered 5');
} else if (x == 6) {
  alert('User have entered 6');
} else if (x == 7) {
  alert('User have entered 7');
} else {
  alert('User have entered some number');
}


switch (x) {
  case 'A':
    {alert('User have entered A');
    break;}
  case 'B':
    alert('User have entered B');
    break;
  case 'C':
    alert('User have entered C');
    break;
  default: alert('User have entered some character'); break;
}

*/
/*
function myAdd(x1, x2) {
  return x1 + x2;
}

function mySub(x1, x2) {
  return x1 - x2;
}

function myDiv(x1, x2) {
  return x1 / x2;
}

function myMult(x1, x2) {
  return x1 * x2;
}

*/

/*

let number1 = prompt('Enter number1');
let number2 = prompt('Enter number2');
let op = prompt('Enter sign (+,-,/,*)');
*/
/*
if(op == '+') {myAdd(number1,number2);
} else if(op == '-'){mySub(number1,number2);
  } else if(op == '/'){myDiv(number1,number2);
    } else if(op == '*'){myMult(number1,number2);
    } else{console.log('Unknown operator');}
*/
/*
switch (op) {
  case '+': {
    console.log(myAdd(number1, number2));
    break;
  }
  case '-': {
    console.log(mySub(number1, number2));
    break;
  }
  case '/': {
    console.log(myDiv(number1, number2));
    break;
  }
  case '*': {
    console.log(myMult(number1, number2));
    break;
  }
  default: {
    console.log('Unknown operator');
    break;
  }
}
*/

// function declaration
function myAdd1(x1, x2) {
  return x1 + x2;
}

// function expression
let myAdd2 = function (x1, x2) {
  return x1 + x2;
};

console.log(myAdd1(2, 2));
console.log(myAdd2(2, 2));

//array function

let myAdd3 = (x1, x2) => x1 + x2;

let myAdd4 = (x1, x2) => {
  let result;
  result = x1 + x2;
  return result;
};

console.log(myAdd3(2, 2));
console.log(myAdd4(2, 2));

let sayHelloWithUser = (userName) => {
  let greeting = 'Hello, ' + userName;
  console.log(greeting);
};

let mySub2 = (x1, x2) => {
  let result;
  result = x1 - x2;
  return result;
};

let myMult2 = (x1, x2) => x1 * x2;

let myDiv2 = (x1, x2) => x1 / x2;

// Вывести числа от заданного до нуля

let myFun1 = (userValue) => {
  // for
  let i;
  for (i = userValue; i >= 0; i--) {
    console.log(i);
  }
  /*
  for(; userValue>=0; userValue--){
    console.log(userValue);
  }
  */
};

console.log('Task 5-1');
myFun1(5);

let myFun2 = (userValue) => {
  // while
  while (userValue > 0) {
    console.log(userValue);
    userValue--;
  }
};
console.log('Task 5-2');
myFun1(5);

/*
TASKS

Стрелочные функци

1 Определите в какую четверть часа попадает введенное количество минут 
пользователем (например, 40 минут - 3-я четверть часа)

2 Найти произведение чисел в пределах от limit1 до limit2

*/

let userVal = (minutes) => {
  let part = Math.ceil(minutes / 15);
  return part;
};

let userVal = prompt('Введите минуты');
console.log('The part of an hour is ', definePartOfHour(userVal));

/* плохое решение

let userVal = (minutes) => {
  let part = Math.ceil(minutes / 15);
  switch (part) {
    case 1:
      console.log('1 part of an hour');
      break;
    case 2:
      console.log('2 part of an hour');
      break;
    case 3:
      console.log('3 part of an hour');
      break;
    case 4:
      console.log('4 part of an hour');
      break;
    default: console.log('error'); break;
  }
};

let userVal = prompt('Введите минуты');
console.log(definePartOfHour(userVal));

*/

let multWithLimits = (limit1, limit2) => {
  if (limit1 > limit2) {
    let buf = limit1;
    limit1 = limit2;
    limit2 = buf;
  }
  let i,
    result = 1;
  for (i = limit1; i <= limit2; i++) {
    result *= i;
  }
  /*
  for (; limit1 <= limit2; limit1++) {
    result *= limit1;
  }
  */
  return result;
};

console.log(multWithLimits(2, 5));
