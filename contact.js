document.addEventListener('DOMContentLoaded', function () {
    const rainContainer = document.getElementById('rain-container');
    const raindropsCount = 100;

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // 
        raindrop.style.opacity = Math.random();
        rainContainer.appendChild(raindrop);


        raindrop.addEventListener('animationend', () => {
            raindrop.remove();
            createRaindrop();
        });
    }

    for (let i = 0; i < raindropsCount; i++) {
        setTimeout(createRaindrop, Math.random() * 1000);
    }
});