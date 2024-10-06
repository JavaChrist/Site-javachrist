
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
        console.log("Login réussi");
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('userEmail', email);

        window.location.href = "/fr/client.html";
    } else {
        console.log("Email ou mot de passe incorrect");
        alert("Email ou mot de passe incorrect");
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



