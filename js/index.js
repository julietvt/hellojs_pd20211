const user1 = {
  name: 'test',
  surname: 'testovich',
  email: 'test@test.com',
  field1: null,
  field2: {},
  field3: { name: 'hello' },
  field4: true,
  field5: 100,
  field6: function () {
    return 1;
  },
  field7: [],
  field8: [1, 2, 3],
  [Symbol('id')]: 123,
  field9: undefined,
};

const jsonUser = JSON.stringify(user1);

const parseUser = JSON.parse(jsonUser);

console.log(jsonUser);
console.log(parseUser);

localStorage.setItem('user1', jsonUser);

// когда мы будем использовать инфу

const getUser1 = JSON.parse(localStorage.getItem('user1'));
console.log('from localStorage:', getUser1);
