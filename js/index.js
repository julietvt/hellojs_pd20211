/*
const ACTION_READ = 'ACTION_READ';
const ACTION_UPDATE = 'ACTION_READ';

//symbol

const ACTION_READ = Symbol();
const ACTION_UPDATE = Symbol();
*/

//итератор

/*
let a = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
*/

//list
class Item {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addStart(value) {
    const new_head = new Item(value, this.head, null);
    if (this.head) {
      this.head.prev = new_head;
    }
    this.head = new_head;
    if (!this.tail) {
      this.tail = new_head;
    }
    this.size++;
  }
}
