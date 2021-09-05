// рекурсия

// число в степени
// base ^ exp  2^5=2*2*2*2*2

/*
function pow1 (base, exp){
  for(let i=2; i<=exp; i++){
    base *= base;
  }
  return base;
}
*/

/*
function pow1(base, exp) {
  let result = 1;
  for (let i = 1; i <= exp; i++) {
    result = result * base;
  }
  return result;
}

console.log(pow1(2, 5));
*/

/*
pow2(2, 5)
pow2(2, 4)
pow2(2, 3)
pow2(2, 2)
pow2(2, 1) if (exp == 1)   return base=2
*/

function pow2(base, exp) {
  if (exp == 1) {
    return base;
  }
  return base * pow2(base, exp - 1);
}

console.log(pow2(2, 5));

// Ряд Фибоначчи A[i] = A[i-1] + A[i-2]
// i:  1 2 3 4 5 6  7  8  9  10 11
// Ai: 1 1 2 3 5 8 13 21 34  55 89

//return n <= 1 ? n : fib(n - 1) + fib(n - 2)

// сложность n^2

function fibonachi(n) {
  if (n < 1) {
    return;
  }
  if (n <= 2) {
    return 1;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
}

function fibonachi_2(n) {
  if (n < 1) {
    return;
  }
  if (n <= 2) {
    return 1;
  }
  let fib1 = 1,
    fib2 = 1;
  let sum = fib1 + fib2;
  for (let i = 3; i < n; i++) {
    fib1 = fib2;
    fib2 = sum;
    sum = fib1 + fib2;
  }
  return sum;
}
