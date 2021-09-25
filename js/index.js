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
  addEnd(value) {
    const new_tail = new Item(value, null, this.tail);
    if (this.tail) {
      this.tail.next = new_tail;
    }
    this.tail = new_tail;
    if (!this.head) {
      this.head = new_tail;
    }
    this.size++;
  }
  addAfterNode(node, value) {
    if (this.tail == node) {
      this.addEnd(value);
      return;
    }
    const new_item = new Item(value, node.next, node);
    node.next = new_item;
    new_item.next.prev = node;
    this.size++;
  }
  [Symbol.iterator]() {
    let current_item = this.head;
    return {
      next() {
        if (current_item) {
          const value = current_item.value;
          current_item = current_item.next;
          return {
            value: value,
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  }
}

const list1 = new List();
list1.addEnd(5);
list1.addEnd('hello');
list1.addEnd(100);
list1.addEnd({ name: 'Tom', surname: 'Fox' });
