document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.home-content .text');

    if (textElement) {
        const options = {
            strings: ['Développeur Web', 'Designer UI/UX', 'Freelance'],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 2000,
            loop: true,
        };

        const observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                new Typed(textElement, options);
                observer.disconnect();
            }
        });

        observer.observe(textElement);
    }
});
