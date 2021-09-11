//1
const r1 = /[a-z]+/g;
//2
const r2 = new RegExp('\\w+');

const str = '1234 Tom java script';

console.log(r1.test(str));
console.log(r1.test('hello'));

// test вернет true/false
// search / match

console.log(str.search(r1));

console.log(str.match(r1));

let result = str.matchAll(r1);
console.log(result);
for (let i of result) {
  console.log(i);
}

function fun1(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].charCodeAt(0) > '0'.charCodeAt(0) &&
      str[i].charCodeAt(0) < '9'.charCodeAt(0)
    ) {
      continue;
    }
    return false;
  }
  return true;
}

function fun2(str) {
  const reg = /^\d+$/g;
  return reg.test(str);
}

const str5 = 'inet 102.168.1.148 netmask 255.255.255.0 broadcast 192.168.1.2';
const reg = /.+\s(\d{1,3}\.){3}\d{1,3}/;
/\d{1,3}(?:\.\d{1,3}){3}/;

//Написать функцию, которая очищает строку от всех не буквенно-цифровых символов
//Пример, "This., -/ is #! a ;: {} to $ % ^ & * book"; преобразуется "This is a book"

let str6 = 'This., -/ is #! a ;: {} to $ % ^ & * book';
let res = '';
res = str6.replace(/[^\w\s]/g, '').replace(/\s+/g, ' ');

//Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит спам. Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх.
//Функция должна быть нечувствительна к регистру.
