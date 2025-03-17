document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', () => {
        document.querySelector('.lightbox-img').src = image.src; // Set lightbox image to clicked image
        document.querySelector('.lightbox').style.display = 'flex'; // Show lightbox
    });
});

// Click outside the image to close the lightbox
document.querySelector('.lightbox').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) { // Check if the click target is the lightbox itself
        document.querySelector('.lightbox').style.display = 'none'; // Hide lightbox
    }
});