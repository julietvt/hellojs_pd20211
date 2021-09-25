// генераторы
//  для обьеявления генератора function *
// основной метод генератора next()
// при вызове он возобновляет код до ближайшего yield

function* generator1() {
  yield 1;
  yield 2;
  yield 3;
}

const r1 = generator1();

const r2 = generator1();
