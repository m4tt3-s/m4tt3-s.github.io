const images = ['ticket1.png', 'ticket2.png']; // Paths to your images
let currentImage = -1; // Start with -1 to indicate the home.png is displayed initially

document.getElementById('imageContainer').addEventListener('click', function() {
    currentImage = (currentImage + 1) % images.length; // Advance to the next image

    // Show the info box only if we are not showing home.png
    if (currentImage === 0) { // When transitioning to the first image in the array
        document.getElementById('infoBox').classList.remove('hide');
    }

    // Update the image source. Use a conditional operator to decide whether to show home.png or a ticket image
    document.getElementById('mainImage').src = currentImage >= 0 ? images[currentImage] : 'home.png';
});
