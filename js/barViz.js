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
  var barPadding = '1';

  function createSvg(parent, height, width) {
    return d3.select(parent).append('svg')
    .attr({
        'height': height,
        'width': width,
        'class': 'col center align-center',
        'border': 'solid 0.1em red'
    });
}

var svg = createSvg('#viz', svgHeight, svgWidth);

  // Create our initial D3 chart.
  svg.selectAll('rect')
  .data(frequencyData)
  .enter()
  .append('rect')
  .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData.length);
})
  .attr('width', svgWidth / frequencyData.length - barPadding);

  // Continuously loop and update chart with frequency data.
  function renderChart() {
   requestAnimationFrame(renderChart);

     // Copy frequency data to frequencyData array.
     analyser.getByteFrequencyData(frequencyData);

     // Update d3 chart with new data.
     svg.selectAll('rect')
     .data(frequencyData)
     .attr('y', function(d) {
         return ( svgHeight - d) / 2;
     })
     .attr('height', function(d) {
         return d ;
     })
     .attr('fill', function(d) {
         return 'rgb(' + d + ', 223,  255 )';
     });
 }

  // Run the loop
  renderChart();

}());