document.addEventListener('click', function() {
    const shareIcon = document.getElementById('shareIcon');
    
    shareIcon.addEventListener('click', function() {

        const appear = document.getElementById('appear');
        if (appear.classList.contains('hidden')) {
            appear.classList.remove('hidden');
        }
    });
});