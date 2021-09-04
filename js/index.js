// СТРОКИ String

let str1 = 'hello world!!!';
let str2 = '';
console.log(str1);

// доступ str[0], str[1]
const [firstCh, ...restStr] = str1;

console.log(str1.charAt(0));

/*
\\ обратный слеш
\t табуляция
\n новая строка
\` кавычки \"
\u юникод таблица

*/

console.log('word "hello"');
//console.log('word \'hello\'');
console.log('word \nhello \nhi');
console.log('word \thello \thi');

// \ экранирование
console.log('\u{263A}');
console.log('\u{1F608}');

// длина строки
console.log(str1.length);

//перевод строки с массив
str1.toCharArray();

// задачи на строки
//1 строку преобразовать в массив слов

let str = '   hello world  string  John  Fox';

function task1(str) {
  return str.trim().split(' ');
}

// сделать первую букву заглавной
str[0].toUpperCase() + str.slice(1);
// сделать каждое слово с заглавной буквы

//сделать переменную в верблюжем регистре
let words = str.split(' ');

// вставить слово в предложении в указанную позицию

function task10(str, word, position) {
  let words = str.split('');
  words.splice(position, 0, word);
  let resultStr = words.join('');
  return resultStr;
}

// найти сколько раз какойто символ встречается в строке

function task11(str, searchSymbol) {}
