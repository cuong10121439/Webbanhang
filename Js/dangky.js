function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").Value;
    var email = document.getElementById("email").Value;
    var password = document.getElementById("password").Value;
    var user = {
      username: username,
      email: email,
      password: password
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Đăng ký thành công");
  }