
function getLoggedInUser() {
    const userEmail = localStorage.getItem("userEmail");

    return users.find(user => user.email === userEmail);
}

function displayClientInfo() {
    const client = getLoggedInUser();

    if (client) {
        const clientInfoDiv = document.getElementById("client-info");
        clientInfoDiv.innerHTML = `
            <h2>Bonjour, ${client.name}</h2>
            <p>Email : ${client.email}</p>
        `;
    } else {

        window.location.href = "/fr/login.html";
    }
}

function displayFileList() {
    const files = [
        { name: "Facture - Janvier", url: "/files/facture-janvier.pdf" },
        { name: "Rapport de projet", url: "/files/rapport-projet.pdf" },
        { name: "Maquette site - Février", url: "/files/maquette-fevrier.zip" },
    ];

    const fileListUl = document.querySelector("#file-list ul");
    files.forEach((file) => {
        const li = document.createElement("li");
        li.classList.add("file-item");
        li.innerHTML = `<span>${file.name}</span> <a href="${file.url}" download>Télécharger</a>`;
        fileListUl.appendChild(li);
    });
}

function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    window.location.href = "/fr/login.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
        window.location.href = "/fr/login.html";
    } else {
        displayClientInfo();
        displayFileList();
    }
});

document.getElementById("logout").addEventListener("click", logout);
