const carouselInner = document.querySelector('.carousel-inner');
let items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
    currentIndex = (currentIndex + 1) % items.length;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(updateCarousel, 5000);
