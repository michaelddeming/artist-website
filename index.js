const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0; // Track the current index of the image
const totalImages = images.length;

// Function to update the image position
function updateCarousel() {
    // Calculate how far to move based on the current index
    const translateX = -currentIndex * 100; // Move 100% left per image
    carouselImages.style.transform = `translateX(${translateX}%)`;
}

// Next button event
nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0; // Restart from the first image when reaching the end
    }
    updateCarousel();
});

// Previous button event
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Go to the last image if at the first
    }
    updateCarousel();
});