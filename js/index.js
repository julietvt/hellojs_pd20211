//Создайте карту map для списка пользователей.
//Каждый пользователь представляет собой отдельный объект со свойствами id, name, age.
//( В качестве ключа выбрать id)

users = [
  { id: 1, name: 'Tom', age: 20 },
  { id: 2, name: 'John', age: 21 },
  { id: 3, name: 'Ann', age: 20 },
  { id: 4, name: 'Tom', age: 25 },
  { id: 5, name: 'Kate', age: 20 },
];

/*
let map = new Map();
for(let i=0; i<users.length; i++){
  map.set(users[i].id, {users[i].name, users[i].age});
}
*/
<ul>
  <li>user1</li>
  <li>user2</li>
  <li>user3</li>
</ul>;

/*
<ul>
  <UserItem> дял user1
  <UserItem>  для user2
  <UserItem> для user3
</ul>;


mapUser = (user) => {
  return <UserItem key={user.id} user={user} />;
}

<ul>{users.map(mapUser)}</ul>
*/
