document.addEventListener('click', function() {
    const shareIcon = document.getElementById('shareIcon');
    
    shareIcon.addEventListener('click', function() {
        alert('Open!');
    });
});