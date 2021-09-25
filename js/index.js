function myArray() {
  this.length = 0;
  this.push(...arguments);
}

myArray.prototype = {
  push() {
    for (let value of arguments) {
      this[this.length++] = value;
    }
    return this.length;
  },
  pop() {
    if (this.length > 0) {
      const result = this[--this.length];
      delete this[this.length];
      return result;
    }
  },
};
// для обьекта __proto__

let obj1 = {
  name: 'Tom',
  surname: 'Fox',
};

let obj2 = {
  login: 'loginQwerty123',
};

obj1.__proto__ = obj2;
