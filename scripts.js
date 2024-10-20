document.addEventListener('DOMContentLoaded', function() {
    // Add animations or effects here if desired
    console.log("Website loaded");

    // Example: make title rotate on hover
    const title = document.querySelector('.title');
    title.addEventListener('mouseover', () => {
        title.style.transform = 'rotate(360deg)';
        title.style.transition = 'transform 1s ease';
    });

    title.addEventListener('mouseleave', () => {
        title.style.transform = 'rotate(0deg)';
    });
});
