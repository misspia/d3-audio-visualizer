var audioElement = document.getElementById('audio-element');

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


var elapsedTimeElement = document.getElementById('elapsed-time');

audioElement.ontimeupdate = function() {
	displayTime();
}

function displayTime() {

	currentTime = audioElement.currentTime,
	totalTime = audioElement.duration,
	elapsedTime = currentTime / totalTime * 100;

	elapsedTimeElement.style.width = elapsedTime + "%";

}


function changeVolume(el){
	audioElement.volume = el.value;
}

