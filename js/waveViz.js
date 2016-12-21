(function() {

  'use strict';

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
  var numberOfPoints = Math.ceil(svgWidth / 2);

  function createSvg(container, height, width) {
    return d3.select(container).append('svg')
    .attr({
      'height': height,
      'width': width,
      'class': 'col center align-center',
      'border': 'solid 0.1em red'
    });
  }

  var svg = createSvg('#viz', svgHeight, svgWidth);

// Define the line
var valueline = d3.svg.line()
.x(function(d, i) { return x(i); })
.y(function(d) { return y(d); });

var x = d3.time.scale().range([0, svgWidth]);
var y = d3.scale.linear().range([svgHeight, 0]);


  // Create our initial D3 chart.
  svg.append("path")
  .attr("class", "line")
  .attr("d", valueline(frequencyData));

  // Continuously loop and update chart with frequency data.
  function renderChart() {
   requestAnimationFrame(renderChart);

     // Copy frequency data to frequencyData array.
     analyser.getByteFrequencyData(frequencyData);

     // Update d3 chart with new data.

     // x.domain(d3.extent(frequencyData, function(d, i) { return i; }));
     // y.domain([0, d3.max(frequencyData, function(d) { return d; })]);

     svg.selectAll("path")
     .attr('d', valueline(frequencyData))



   }
  // Run the loop
  renderChart();

}());