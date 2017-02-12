var audioElement = document.getElementById('audio-element');

function togglePlay(el){

	if(audioElement.paused) {
		el.innerHTML = '||';
		playAudio();		

	} else {
		el.innerHTML = '&#9658';
		pauseAudio();	

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

var audioUpload = document.getElementById('audio-upload');
var playState = document.getElementsByClassName('play-state')[0];

function handleUpload(obj){
	
	pauseAudio();

	var files = obj.files;
	
	fileData(files); 

	var file = file = URL.createObjectURL(files[0]); 
		audioElement.src = file;
	
	playAudio();
	playState.innerHTML = '||';
}

var audioTitle = document.getElementById('audio-title');

function fileData(files) {
	var name = files[0].name;

	audioTitle.innerHTML = name;
}


















