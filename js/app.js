var audioElement = document.getElementById('audioElement');

var playState = false;

function togglePlay(el){

	playState = !playState;

	if(playState == false) {

		el.innerHTML = 'Play &#9658';
		pauseAudio();

	} else {

		el.innerHTML = 'Pause ||';
		playAudio();

	}
}

function playAudio(){
	audioElement.play();
}

function pauseAudio(){
	audioElement.pause();
}

var currentTime = 0;
audioElement.ontimeupdate = function() {
	displayTime();
}

function displayTime() {
	currentTime = audioElement.currentTime,
	totalTime = audioElement.duration,
	elapsedTime = currentTime / totalTime * 100;

	// console.log(audioElement.currentTime + " of " + audioElement.duration);
	console.log(elapsedTime);
}



function changeVolume(el){
	audioElement.volume = el.value;
}

