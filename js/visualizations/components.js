var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var audioElement = document.getElementById('audio-element');
var audioSrc = audioCtx.createMediaElementSource(audioElement);
var analyser = audioCtx.createAnalyser();

  // Bind our analyser to the media element source.
  audioSrc.connect(analyser);
  audioSrc.connect(audioCtx.destination);

  //var frequencyData = new Uint8Array(analyser.frequencyBinCount);
  var frequencyData = new Uint8Array(200);

  var svgHeight = window.innerHeight * 0.9;
  var svgWidth =  window.innerWidth;


  function createSvg(container, height, width) {
  	return d3.select(container).append('svg')
  	.attr({
  		'height': height,
  		'width': width,
  		'class': 'col center align-center',
  		'border': 'solid 0.1em red'
  	});
  }

function setColorScale(frequencyData){
  var colorScale = d3.scale.linear()
      .domain([0, d3.max(frequencyData)])
      .range([0, 255]);

    return colorScale;
}