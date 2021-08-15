// вывести N звездочки
//1
console.log('******************');
//2
console.log('*');
console.log('*');
console.log('*');
console.log('*');
console.log('*');
console.log('*');
console.log('*');
console.log('*');
console.log('*');
console.log('*');

//циклы if while
/*
while (условие) {
  инструкция
}
*/
console.log('---------------------');
let n = 5, // end
  i = 1; // start
while (i <= n) {
  console.log('*');
  i = i + 1; // i++;
}

// 2
while (n > 0) {
  console.log('*');
  n--;
}

// задача 1,2....10
n = 10;
i = 1;
while (i <= n) {
  console.log(i);
  i++;
}

console.log('---------------------');
// задача 1,3,5,....10 нечетные числа
i = 1;
n = 10;
while (i <= n) {
  console.log(i);
  i = i + 2;
}

console.log('---------------------');
// задача 1,3,5,....10 четные числа
i = 2;
n = 10;
while (i <= n) {
  console.log(i);
  i = i + 2;
}
// задача 1,5,10,.... четные числа
i = 0;
n = 30;
while (i <= n) {
  console.log(i);
  i = i + 5;
}

// сумма чисел от 1 до 10
let result = 0;
/* BAD
result += 1;
result += 2;
result += 3;
result += 4;
result += 5;
result += 6;
result += 7;
result += 8;
result += 9;
result += 10;
*/
console.log('---------------------');
i = 1;
n = 10;
while (i <= n) {
  result += i;
  i++;
}
console.log('sum from 1 to 10 is', result);
/*
i=1; 1 <= 10 ? result += 1
i=2  2 <=10 ????  result += 2
i=3  3 <=10 ????  result += 3
..
i=10  10 <=10 ????  result += 10
i=11 while(11 <= 10 ) ??? exit
*/

// произведение чисел от 1 до 10
console.log('---------------------');
i = 1;
n = 10;
result = 1;
while (i <= n) {
  result = result * i; //result *= i;
  i++;
}
console.log('sum from 1 to 10 is', result);

// произведение нечетных чисел от 1 до 10
console.log('---------------------');
i = 1;
n = 10;
result = 1;
while (i <= n) {
  result = result * i; //result *= i;
  i = i + 2;
}
console.log('sum from 1 to 10 is', result);

/*
// 1 выполнить указанное действие хотя бы 1 раз вне зависимости от условия
// while : сначала проверяем - потом выполняем
// do-while: сначала 1 раз выполним потом только начнем проверять

do{
   выражение
}
while (условие);
*/
// сумма от 1 до 10
(i = 1), (n = 10), (result = 0);
do {
  result = result + i; //result *= i;
  i = i + 1;
} while (i <= n);
console.log('---------------------');
console.log('do-while: sum from 1 to 10 is', result);
/*
i=1  do: result = result + 1  = 1, i=i+1=2    while(2<=10)
i=2  do: result = 1 + 2  = 3, i=2+1=3    while(3<=10)
i=3  do: result = 3 + 3  = 6, i=3+1=4    while(4<=10)
i=4  do: result = 6 + 4  = 10, i=4+1=5    while(5<=10)
..
i=10  do: result = result + 10 , i=10+1=11    while(11<=10)
*/

// сумма от 1 до 10
console.log('---------------------');
i = 10000;
n = 10;
result = 0;
while (i <= n) {
  result = result + i;
  i++;
}
console.log('sum from 1 to 10 is', result);
//do-while
console.log('---------------------');
i = 10000;
n = 10;
result = 0;
do {
  result = result + i;
  i++;
} while (i <= n);
console.log('sum from 1 to 10 is', result);

/*
Задачи

1 вычислить сумму нечетных чисел от 1 до 30 

2 вывести первых 5 значений степени 2

3* вывести таблицу значений для функции y = -3x2 + 5x - 2 для значения х от -2 до 2 с шагом 0.5


4 спросить у пользователя общеизвестный факт на ваш вкус и высветить ему сообщение правильно или нет. например, “как называется наша планета?” 

5*
попросить пользователя решить пример “1+1=?” (или любой другой пример на ваш вкус). высвечивать (повторять) пример до тех пор пока пользователь не решит его 

*/

// task1
// 1....30
// 1, 1+2=3,  3+2=5, 5+2=7 ,...   итого 1,3,5,7...
// если число это num следующее число num = num + 2
let num = 1;
n = 30;
result = 0;
while (num <= n) {
  result += num; //result = result+ num;
  num += 2; // num = num + 2
}
console.log('---------------------');
console.log('Task1: ', result);

//task2 вывести первых 5 значений степени 2
//1 оператор **, счетчик i отвечать за количество операций (5)
/*
1<=5 result = 2 ** 1= 2
2<=5 result = 2 ** 2= 2*2=4
3<=5 result = 2 ** 3= 2*2*2=8
...
пускай считаем 10 степеней i<=10 i=10 result = 2 ** 10= 2*2*2*2*2*2*2*2*2
*/
console.log('---------------------');
console.log('Task2: ');
result = 1;
(i = 1), (n = 5);
while (i <= n) {
  result = 2 ** i;
  console.log(result);
  i++;
}
//2 оператор *, счетчик i отвечать за количество операций (5)
console.log('---------------------');
console.log('Task2: ');
result = 1;
(i = 1), (n = 5);
while (i <= n) {
  result = result * 2;
  console.log(result);
  i++;
}
//task2-2 вывести первых 5 значений степени 8
console.log('---------------------');
console.log('Task2-2 : ');
result = 1;
(i = 1), (n = 5);
while (i <= n) {
  result = result * 8;
  console.log(result);
  i++;
}

//task4
/*
let userAnswer, rightAnswer;
userAnswer = prompt('2+2=?');
rightAnswer = 4;
if (userAnswer == rightAnswer) {
  console.log('Cool!');
} else {
  console.log('Soory. Bad(((');
}
*/

//task4* спросить 3 раза
let userAnswer, rightAnswer;
rightAnswer = 4;

//1 ((((((((((((((
/*
userAnswer = prompt('2+2=?');

if (userAnswer == rightAnswer) {
  console.log('Cool!');
} else {
  userAnswer = prompt('2+2=?');
  if (userAnswer == rightAnswer) {
    console.log('Cool!');
  } else {
    userAnswer = prompt('2+2=?');
    if (userAnswer == rightAnswer) {
      console.log('Cool!');
    } else {
      console.log('Soory. Bad(((');
    }
  }
}
*/
// 2
/*
i = 1;
while (i <= 3) {
  userAnswer = prompt('2+2=?');
  if (userAnswer == rightAnswer) {
    console.log('Cool!');
    break; // выход  и прекращение выполнения цикла
  } else {
    console.log('Soory. Bad');
  }
  i++;
}
*/
// task5
//1
/*
i = 1;
while (i <= 99999) {
  userAnswer = prompt('2+2=?');
  if (userAnswer == rightAnswer) {
    console.log('Cool!');
    break; // выход  и прекращение выполнения цикла
  } else {
    console.log('Soory. Bad');
  }
  i++;
}
*/
//2
/*
userAnswer = prompt('2+2=?');
while (userAnswer != rightAnswer) {
  console.log('Bad');
  userAnswer = prompt('2+2=?');
}
console.log('Yes');
*/
//3
//while(true) вечный цикл
/*
while(true){
  console.log('*');
}
*/

/*
while (true) {
  userAnswer = +prompt('2+2=?');
  if (userAnswer === rightAnswer) {
    console.log('Yes');
    break;
  } else {
    console.log('No');
  }
}
*/

/*
while (true) {
  userAnswer = +prompt('2+2=?');
  if (userAnswer === rightAnswer) {
    console.log('Yes');
    break;
  }
  console.log('No');
}
*/

/*
while (true) {
  userAnswer = +prompt('2+2=?');
  if (userAnswer !== rightAnswer) {
    console.log('No');
    continue;
  }
  console.log('Yes');
  break;
}
*/

//task3* вывести таблицу значений для функции y = -3x^2 + 5x - 2 для значения х от -2 до 2 с шагом 0.5
console.log('Task3*');
let x = -2,
  limitX = 2,
  step = 0.5,
  y;
while (x <= limitX) {
  y = -3 * x * x + 5 * x - 2;
  console.log('x=', x, 'y=', y);
  x += step;
}

// цикл for
/*
for ([инициализация или начальное условие]; [конечное условие]; [шаг]){
  операции
}
// 1,2,3,...10
/*
n = 10;
i = 1;
while (i <= n) {
  console.log(i);
  i++;
}
*/
/*
n = 10;
for (i = 1; i <= n; i++) {
  console.log(i);
}

// для нечетных чисел
for (i = 1; i <= n; i = i + 2) {
  console.log(i);
}
// для четных чисел
for (i = 0; i <= n; i = i + 2) {
  console.log(i);
}
*/

// Задача сумма чисел от 1 до 100 через for

n = 100;

// while
num = 1; //обязатиельно задать!!!!
result = 0;
while (num <= n) {
  result += num;
  num++;
}
console.log('---------------------');
console.log('While. sum from 1 to 100 is', result);

//for
result = 0;
for (num = 1; num <= n; num++) {
  result += num;
}
console.log('---------------------');
console.log('For. sum from 1 to 100 is', result);

/*

result = 0;
num = 1;
for (; num <= n; num++) {
  result += num;
}

result = 0;
for (num = 1; ; num++) {
  result += num;
  if(num <= n) break;
}

result = 0;
num = 1;
for (;;) {
  result += num;
  if(num <= n) break;
}
*/

/*
for (;;) {} бесконечный цикл  аналог while(true)
!!! не забывать break

*/
