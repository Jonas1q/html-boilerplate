function enableDarkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

$(document).ready(function () {
  $("#CreateBtn").click(function (event) {
    var mail = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var regx = /\S+@\S+\.\S+/;
    if (regx.test(mail) && pass.length >= 6) {
      event.preventDefault();
      window.location = "/login/login.html";
    } else {
      event.preventDefault();
      window.location = "/create/createUser.html";
    }
  });
});
