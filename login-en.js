
document.getElementById('login-eye').addEventListener('click', function () {
  const passwordInput = document.getElementById('password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    this.classList.replace('ri-eye-off-line', 'ri-eye-line');
  } else {
    passwordInput.type = 'password';
    this.classList.replace('ri-eye-line', 'ri-eye-off-line');
  }
});

function login(email, password) {
  const user = users.find(user => user.email === email && user.password === password);
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (user) {
    console.log("Login successful");
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('userEmail', email);

    window.location.href = "/en/customer.html";
  } else {
    console.log("Incorrect email or password");
    alert("Incorrect email or password");
  }

  emailInput.value = "";
  passwordInput.value = "";
}

window.addEventListener('load', function () {
  const savedEmail = localStorage.getItem('savedEmail');
  const savedPassword = localStorage.getItem('savedPassword');

  if (savedEmail && savedPassword) {
    document.getElementById('email').value = savedEmail;
    document.getElementById('password').value = savedPassword;
    document.getElementById('remember-me').checked = true;
  }
});

document.querySelector("#login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('remember-me').checked;

  if (rememberMe) {
    localStorage.setItem('savedEmail', email);
    localStorage.setItem('savedPassword', password);
  } else {
    localStorage.removeItem('savedEmail');
    localStorage.removeItem('savedPassword');
  }

  login(email, password);
});

document.addEventListener("DOMContentLoaded", function () {
  const loggedIn = localStorage.getItem("loggedIn");
  const currentPage = window.location.pathname;

  console.log("Login status:", loggedIn);
  console.log("Current page:", currentPage);

  if (loggedIn && currentPage !== '/en/login-en.html') {
    console.log("User logged in. Redirecting to customer page.");
    window.location.href = "/en/customer.html";
  }
});

