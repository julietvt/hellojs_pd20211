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
