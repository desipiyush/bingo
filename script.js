
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#dde5ec',
    progressColor: '#03cebf',
    barWidth: 4,
    height: 90,
    reponsive: true,
    hideScrollbar: true,
    barRadius: 4,
    cursorColor: '#03cebf',
    cursorWidth: 1,
    cursorHeight: 1
});
wavesurfer.load('bingo.mp3');

var hero = document.getElementsByClassName('hero')
var hero = document.getElementsById('hero')
var bingo = document.getElementById('bingo')

function b() {
    wavesurfer.playPause();
}

function a() {
    wavesurfer.stop();
}