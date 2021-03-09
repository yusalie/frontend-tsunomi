let user;

fetch("https://secure-hollows-51551.herokuapp.com/login/")
  .then((response) => response.json())
  .then((data) => {
    user = data.body;
    console.log(user);
  });

function login() {
  let login = document.getElementById("login-form");
  const inputs = login.getElementsByTagName("input");
  let user_icon = document.getElementById("user");

  let username = inputs[0].value;
  let password = inputs[1].values;

  let log = user.filter((user) => {
    return user.Username == username && user.Password == password;
  });

  console.log(log);

  if (log) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("message", JSON.stringify(username, password));
    alert("Login successful");
    user_icon.innerHTML == `<i class="fas fa-user-slash"></i>`;
  } else {
    alert("enter valid username or password");
  }
}
