document.addEventListener('DOMContentLoaded', function() {
    const images = ['ticket1.png', 'ticket2.png']; // Image paths
    let currentImageIndex = -1; // Start before the first image to indicate the home state

    function updateDateTime() {
        const now = new Date();
        document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US');
        document.getElementById('currentTime').textContent = now.toLocaleTimeString('en-US', { hour12: true });
    }

    setInterval(updateDateTime, 1000); // Update the date and time every second

    function showNextImage() {
        // Increment the image index, loop back to 0 if at the end
        currentImageIndex = (currentImageIndex + 1) % (images.length + 1); // Adjust for home image

        if (currentImageIndex === 0) {
            // Transitioning from home to first ticket
            document.getElementById('mainImage').src = images[currentImageIndex];
            document.getElementById('infoBox').classList.remove('hide');
        } else if (currentImageIndex > 0) {
            // Looping through ticket images
            document.getElementById('mainImage').src = images[currentImageIndex % images.length];
        } else {
            // Reset to home image, hide info box
            document.getElementById('mainImage').src = 'home.png';
            document.getElementById('infoBox').classList.add('hide');
        }
    }

    // Event listener for image container clicks
    document.getElementById('imageContainer').addEventListener('click', showNextImage);

    // Initialize with home image and hidden info box on load
    document.getElementById('mainImage').src = 'home.png';
    document.getElementById('infoBox').classList.add('hide');
});
