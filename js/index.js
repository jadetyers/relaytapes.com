$(document).ready(function() {
    var music = document.createElement('audio');
    music.setAttribute('src', '../22820-145.mp3');
    $.get();
    music.addEventListener('load', function() {
        music.play();
    }, true);
    music.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    $("#box").fadeIn(2000);
    $("#box").show();

    $('#playButton').click(function() {
        music.play();
        $('#playButton').hide();
        $('#stopButton').show();
    });

    $('#stopButton').click(function() {
        music.pause();
        $('#playButton').show();
        $('#stopButton').hide();
    });

    $('#aboutLink').click(function() {
        $('#box').fadeOut();
        $('#about-box').fadeIn();
    });

    $('#backArrow').click(function() {
        $('#about-box').fadeOut();
        $('#box').show();
    });
});