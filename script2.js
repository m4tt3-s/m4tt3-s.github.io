const images = ['ticket1.png', 'ticket2.png']; // Paths to your images
let currentImage = 0;

function updateDateTime() {
    const now = new Date();
    const currentDateElement = document.getElementById('currentDate');
    const currentTimeElement = document.getElementById('currentTime');
    currentDateElement.textContent = now.toLocaleDateString('en-US');
    currentTimeElement.textContent = now.toLocaleTimeString('en-US');
}

setInterval(updateDateTime, 1000); // Update the date and time every second

document.getElementById('imageContainer').addEventListener('click', function() {
    if (currentImage === 0) { // First click from home to ticket1
        document.getElementById('mainImage').src = images[currentImage];
        document.getElementById('infoBox').classList.remove('hide');
    } else { // Subsequent clicks between ticket1 and ticket2
        document.getElementById('mainImage').src = images[currentImage];
    }
    currentImage = (currentImage + 1) % images.length; // Loop through the images
});
