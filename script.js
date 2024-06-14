alert('JavaScript is running');
const images = [
    'images/Screenshot 2024-06-10 011641',
    'images/Screenshot 2024-06-11 174825',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

let currentIndex = 0;

function showImage(index) {
    const galleryImage = document.getElementById('gallery-image');
    galleryImage.src = images[index];
    console.log(`Showing image: ${images[index]}`); // Debug log
}

function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}

// Initial image display
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
});