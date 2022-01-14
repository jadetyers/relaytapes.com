let audio = document.getElementById('audio');
let audioButton = document.getElementById('audioButton');
let count = 0;

function playStop() {
    if (count == 0) {
        count = 1;
        audio.play();
        audio.loop = true;
        audioButton.className = 'fas fa-stop';
    } else {
        audioButton.className = 'fas fa-play';
        count = 0;
        audio.pause();
    }
}