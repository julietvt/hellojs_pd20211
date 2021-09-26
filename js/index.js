/*
Задача.
Форма с логином и паролем
Реализовать класс User и сгенерировать обьект из данных формы.
полученный обьект сохранить в сесионное хранилище как
авторизированного пользователя
*/
const AUTH_USER = 'AUTH_USER';
class User {
  constructor(login, password) {
    this._login = login;
    this._password = password;
  }
  set login(value) {
    this._login = value;
  }
  set password(value) {
    this._password = value;
  }
  get login() {
    return this._login;
  }
  get password() {
    return this._password;
  }
  outObject() {
    console.log(this);
  }
}

const loginEl = document.querySelector("input[name='login']");
const passwordEl = document.querySelector("input[name='password']");
const loginBtn = document.querySelector('#loginBtn');

loginBtn.onclick = function (e) {
  const thisUser = new User(loginEl.value, passwordEl.value);
  thisUser.outObject();
  sessionStorage.setItem(AUTH_USER, JSON.stringify(thisUser));
};
