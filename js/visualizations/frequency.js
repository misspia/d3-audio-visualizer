(function() {

  'use strict';

  var barPadding = '1';


  var svg = createSvg('#viz', svgHeight, svgWidth);

  // Create initial D3 chart.
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
       // (255, 180, hueScale(d)
     });
   }

  // Run the loop
  renderChart();

}());