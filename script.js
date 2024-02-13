const images = ['ticket1.png', 'ticket2.png']; // Image paths
let currentImage = 0;
let isHome = true; // Flag to track if the current view is the home image

function updateDateTime() {
    const now = new Date();
    const currentDateElement = document.getElementById('currentDate');
    const currentTimeElement = document.getElementById('currentTime');
    currentDateElement.textContent = now.toLocaleDateString('en-US');
    currentTimeElement.textContent = now.toLocaleTimeString('en-US', { hour12: true });
}

setInterval(updateDateTime, 1000); // Update the date and time every second

document.getElementById('imageContainer').addEventListener('click', function() {
    if (isHome) { // First click from home to ticket1
        document.getElementById('mainImage').src = images[currentImage];
        document.getElementById('infoBox').classList.remove('hide');
        isHome = false; // Update flag
    } else { // Subsequent clicks between ticket1 and ticket2
        currentImage = (currentImage + 1) % images.length; // Loop through the images
        document.getElementById('mainImage').src = images[currentImage];
    }
});
