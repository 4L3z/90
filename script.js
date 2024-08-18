document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('backgroundVideo');
    const playPauseButton = document.getElementById('playPause');
    const volumeSlider = document.getElementById('volumeSlider');
    const muteUnmuteButton = document.getElementById('muteUnmute');
    let isMuted = true;
    let isPlaying = true;

    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            video.pause();
            playPauseButton.textContent = 'Reproducir';
        } else {
            video.play();
            playPauseButton.textContent = 'Pausar';
        }
        isPlaying = !isPlaying;
    });

    muteUnmuteButton.addEventListener('click', () => {
        if (isMuted) {
            video.muted = false;
            muteUnmuteButton.textContent = 'Mutear';
        } else {
            video.muted = true;
            muteUnmuteButton.textContent = 'Desmutear';
        }
        isMuted = !isMuted;
    });
    volumeSlider.addEventListener('input', () => {
        video.volume = volumeSlider.value;
    });
});
