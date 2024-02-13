const images = ['ticket1.png', 'ticket2.png']; // Add the paths to your images here
let currentImage = 0;

function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    clockElement.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000); // Update the clock every second

document.getElementById('imageContainer').addEventListener('click', function() {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = images[currentImage];
    currentImage = (currentImage + 1) % images.length; // Loop through the images
});
