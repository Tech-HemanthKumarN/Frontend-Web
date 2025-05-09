let music = document.getElementById('bg-music');
music.volume = 0;
music.play();

let fadeAudio = setInterval(function () {
    if (music.volume < 0.9) {
        music.volume += 0.05;
    } else {
        clearInterval(fadeAudio);
    }
}, 200);

function toggleMusic() {
    if (!music.paused && music.volume > 0) {
        let fadeOut = setInterval(function () {
            if (music.volume > 0.05) {
                music.volume -= 0.05;
            } else {
                music.volume = 0;
                music.pause();
                clearInterval(fadeOut);
            }
        }, 150);
    } else {
        music.play();
        let fadeIn = setInterval(function () {
            if (music.volume < 0.9) {
                music.volume += 0.05;
            } else {
                clearInterval(fadeIn);
            }
        }, 150);
    }
}