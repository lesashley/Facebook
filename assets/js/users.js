window.addEventListener('load',function() {
  var validUsers = getItemFromStorage('users');
  if (validUsers == null) {
    validUsers = [];
    validUsers.push({ name: "Leslie", email: "leslie_96_2@hotmail.com", password: "987654"});
    validUsers.push({ name : "Ashley", email: "lesashley56@gmail.com",  password: "123456"});
    addItemToStorage("users",validUsers);
  }
});
