document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.backgroundColor = '#00ff00'; // Color bluster on tap
    });
});
