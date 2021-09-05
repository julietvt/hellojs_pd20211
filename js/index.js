// заморозка обьекта
const READ = 'READ';
const user = Object.freeze({
  name: 'John',
  surname: 'Fox',
  age: 20,
  isMale: true,
  role: READ,
});

// назначение прав доступа

// admin, moderator, user
const ROLE = Object.freeze({
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  USER: 'USER',
});
// create, read, update, delete
const ACTION = {
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

// role rights

let rights = new Map();

rights.set(ACTION.CREATE, [ROLE.ADMIN, ROLE.MODERATOR]);
rights.set(ACTION.READ, [ROLE.USER, ROLE.MODERATOR, ROLE.ADMIN]);
rights.set(ACTION.UPDATE, [ROLE.MODERATOR]);
rights.set(ACTION.DELETE, [ROLE.ADMIN]);

function checkPermission(action, role) {
  if (rights.has(action)) {
    return rights.get(action).includes(role);
  }
  return false;
}

//rights.set(ROLE.USER, [ACTION.READ]);

/*
const user1 = {
  login: 'user1',
  role_access: ROLE.USER,
  action_access: {ACTION.READ}  
}
*/

// деструктуризация

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// el1 = 1, el2 = 2, rest = [3,4,5,6,7,8,10]
const [el1, el2, ...rest] = arr;

const arr2 = [1, 2, [3, 4, 5, 6], 7, 8, 10];
//5
const [, , [, , el5]] = arr2;

// object

const user100 = {
  name: 'Tom',
  surname: 'Fox',
  age: 20,
  book: {
    cover: {
      pages: 200,
      format: '20x45',
      copies: 5000,
    },
    bookName: 'java script',
    bookYear: 2021,
  },
};
//name
//console.log(user.name);
//или
//const {name} = user;
// cover
//const {book:{cover}} = user;
// pages
/*
const {
  book: {
    cover: { pages },
  },
} = user100;
console.log(pages);

console.log(user100.book.cover.pages);
*/

//1
function getUserFullName1(user) {
  return `${user.name} ${user.surname}`;
}

//2
function getUserFullName2(user) {
  const { name, surname } = user; //!!!!
  return `${name} ${surname}`;
}
