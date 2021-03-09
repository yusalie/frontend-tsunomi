function showPerson() {
  let logingForm = document.getElementById("login-form");
  logingForm.classList.toggle("active");
}

function switchForm() {
  let logingForm = document.getElementById("login-form");
  logingForm.classList.toggle("active");
}

function registerCust() {
  let registerForm = document.getElementById("register-form");
  const inputs = registerForm.getElementsByTagName("input");

  let user = {
    firstname: inputs[0].value,
    lastname: inputs[1].value,
    username: inputs[2].value,
    email: inputs[3].value,
    password: inputs[4].value,
  };
  console.log(user);
  fetch("https://secure-hollows-51551.herokuapp.com/register-user/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("Registeration successful");
      window.location.href = "./index.html";
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
    });
}
