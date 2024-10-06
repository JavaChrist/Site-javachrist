
function initModal() {
    console.log("Initializing modal");

    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];
    var modalTitle = document.getElementById("modal-title");
    var modalText = document.getElementById("modal-text");

    console.log("Modal elements:", modal, span, modalTitle, modalText);

    function showModal(serviceId) {
        console.log("Showing modal for service:", serviceId);

        const isEnglish = document.documentElement.lang === 'en';
        const details = isEnglish ? window.serviceDetailsEN[serviceId] : window.serviceDetails[serviceId];

        if (details) {
            modalTitle.textContent = details.title;
            modalText.innerHTML = details.content;
            modal.style.display = "block";
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        } else {
            console.error("Service details not found for:", serviceId);
        }
    }

    document.querySelectorAll('.read').forEach(function (btn) {
        btn.onclick = function (e) {
            e.preventDefault();
            var serviceId = this.getAttribute('data-service');
            console.log("Read button clicked:", serviceId);
            showModal(serviceId);
        };
    });

    function closeModal() {
        console.log("Closing modal");
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    if (span) {
        span.onclick = closeModal;
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    };
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initModal);
} else {
    initModal();
}


window.serviceDetails = window.serviceDetails || {

};

window.serviceDetailsEN = window.serviceDetailsEN || {

};
