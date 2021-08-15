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

2 вывести первых 10 значений степени 2

3* вывести таблицу значений для функции y = -3x2 + 5x - 2 для значения х от -2 до 2 с шагом 0.5


4 спросить у пользователя общеизвестный факт на ваш вкус и высветить ему сообщение правильно или нет. например, “как называется наша планета?” 

5*
попросить пользователя решить пример “1+1=?” (или любой другой пример на ваш вкус). высвечивать (повторять) пример до тех пор пока пользователь не решит его 

*/
