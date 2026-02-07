document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.5; // Set volume to 0.5 (between 0.4-0.6)

    const playMusicBtn = document.getElementById('playMusicBtn');
    const roseBtn = document.getElementById('roseBtn');
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseMessage = document.getElementById('surpriseMessage');

    // Function to play music
    function playMusic() {
        bgMusic.play().catch(e => console.log('Audio play failed:', e));
    }

    // Play music on floating button click
    playMusicBtn.addEventListener('click', playMusic);

    // Play music on hero button click
    roseBtn.addEventListener('click', playMusic);

    // Reveal surprise message
    surpriseBtn.addEventListener('click', function() {
        surpriseMessage.classList.remove('hidden');
        surpriseMessage.classList.add('fade-in', 'visible');
    });

    // Fade-in on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
