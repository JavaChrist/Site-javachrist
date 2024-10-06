document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  const subTitle = document.querySelector('.sub-title');

  function showSlide(index) {
    if (index >= totalItems) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalItems - 1;
    } else {
      currentIndex = index;
    }
    const newTransform = -currentIndex * 100 + '%';
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform})`;

    animateTitle();
  }

  function animateTitle() {
    subTitle.classList.remove('animate');
    subTitle.innerHTML = subTitle.textContent.split('').map((char, i) =>
      `<span class="glitch-effect" style="--i:${i}">${char}</span>`
    ).join('');

    subTitle.setAttribute('data-text', subTitle.textContent);

    setTimeout(() => {
      subTitle.classList.add('animate');
    }, 10);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  setInterval(nextSlide, 5000);

  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);

  animateTitle();
});