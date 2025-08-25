const slides = [
    'images/slide1.jpg',
    'images/slide2.jpg',
    'images/slide3.jpg',
    'images/slide4.jpg'
];

let currentIndex = 0;
const slideEl = document.getElementById('slide');

function showSlide(index) {
    slideEl.src = slides[index];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Initialize first slide
showSlide(currentIndex);
