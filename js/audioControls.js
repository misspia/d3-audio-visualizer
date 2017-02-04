var audioElement = document.getElementById('audio-element');
var playState = false;

function togglePlay(el){

	playState = !playState;

	if(playState == false) {

		el.innerHTML = '&#9658';
		pauseAudio();

	} else {

		el.innerHTML = '||';
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

var audioUpload = document.getElementById('audio-upload');

function handleUpload(obj){
	
	pauseAudio();

	var files = obj.files;
	
	fileData(files); 

	var file = file = URL.createObjectURL(files[0]); 
		audioElement.src = file;
	
	playAudio();
	
}

var audioTitle = document.getElementById('audio-title');

function fileData(files) {
	var name = files[0].name;

	audioTitle.innerHTML = name;
}


















