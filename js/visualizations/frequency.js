function frequencyVisualization() {
  'use strict';

  var barPadding = '1';
  var svg = createSvg('#viz', svgHeight, svgWidth);

  svg.selectAll('rect')
  .data(frequencyData)
  .enter()
  .append('rect')
  .attr('x', function (d, i) {
    return i * (svgWidth / frequencyData.length);
  })
  .attr('width', svgWidth / frequencyData.length - barPadding);

  function renderChart() {
   requestAnimationFrame(renderChart);

     analyser.getByteFrequencyData(frequencyData);

     svg.selectAll('rect')
     .data(frequencyData)
     .attr('y', function(d) {
       return ( svgHeight - d) / 2;
     })
     .attr('height', function(d) {
       return d ;
     })
     .attr('fill', function(d) {
       return graphColors(d);
     });
   }

  renderChart();
};