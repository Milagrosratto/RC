let currentSlide = 1; // Empezamos con la caja del medio

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('zoom'); // Remover zoom de la caja actual

    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add('zoom'); // Añadir zoom a la nueva caja
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.add('zoom'); // Asegurarse de que la caja del medio tenga zoom al cargar la página
});
