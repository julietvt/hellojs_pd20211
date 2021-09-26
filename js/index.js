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

/*
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Добро пожаловать снова " + user);
  } else {
    user = prompt("Пожалуйста, введите ваше имя:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
*/
