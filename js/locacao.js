document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide-locacao');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('ativo'));
        slides[index].classList.add('ativo');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Autoplay
    let autoplay = setInterval(nextSlide, 5000);

    // Pause autoplay on hover
    const carrosel = document.querySelector('.carrosel-locacao');
    carrosel.addEventListener('mouseenter', () => clearInterval(autoplay));
    carrosel.addEventListener('mouseleave', () => {
        autoplay = setInterval(nextSlide, 5000);
    });
}); 