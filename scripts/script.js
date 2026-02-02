document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('enter-overlay');
    const background = document.getElementById('background');
    const audio = document.getElementById('background-audio');
    audio.volume = 0.2;

    overlay.addEventListener('click', () => {
        // remove overlay
        overlay.style.display = 'none';

        // remove blur
        background.style.filter = 'blur(0px) brightness(100%)';

        // show page content
        const body = document.body; 
        const content = document.querySelector('.content');
        setTimeout(() => content.classList.add('show'), 50);

        // play audio
        audio.play().catch(err => console.log("Autoplay blocked:", err));
    });
});