
function $ (elt) {
	return document.querySelector(elt)
}

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var gainNode = audioCtx.createGain()
gainNode.value = 0.5
var finish = audioCtx.destination
var audioButton = $('.audio')
var song1 = $('.song1')
var song2 = $('.song2')

audioButton.addEventListener('click', pickSong, false);
song1.addEventListener('click', playSong, false)
song2.addEventListener('click', playSong, false)

function pickSong(evt) {
	var songs = $('.songs')
	songs.classList.toggle('hide')
}
function playSong (evt) {
	
}

console.log(audioCtx)
gainNode.connect(finish)
