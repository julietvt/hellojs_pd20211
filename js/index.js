class myArray {
  constructor(iArray) {
    this._innerArray = iArray;
  }
  set innerArray(iArray) {
    this._innerArray = iArray;
  }
  get innerArray() {
    return this._innerArray;
  }
  [Symbol.iterator]() {
    let index = 0;
    let arr = this._innerArray;
    return {
      next() {
        return index < arr.length
          ? { value: arr[index++], done: false }
          : { done: true };
      },
    };
  }
}

let array1 = [];
for (let i = 0; i < 10; i++) {
  array1.push(Math.floor(Math.random() * 100));
}
let objectArray = new myArray(array1);

// 1
console.log(objectArray.innerArray);
//2
for (let j of objectArray) {
  console.log(j);
}
