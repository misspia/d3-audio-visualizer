function waveVisualization() {

  'use strict';

  var svg = createSvg('#viz', svgHeight, svgWidth);

  // Define the line
  var valueline = d3.svg.line()
  .x(function(d, i) { return x(i); })
  .y(function(d) { return y(d) / 2; });

  var x = d3.scale.linear().range([0, svgWidth]);
  var y = d3.scale.linear().range([svgHeight, 0]);

  // Create initial D3 chart.
  svg.append("path")
  .attr("class", "line")
  .attr("d", valueline(frequencyData));

  // Continuously loop and update chart with frequency data.
  function renderChart() {
     requestAnimationFrame(renderChart);

     // Copy frequency data to frequencyData array.
     analyser.getByteFrequencyData(frequencyData);

     // Update d3 chart with new data.
     x.domain(d3.extent(frequencyData, function(d, i) { return i; }));
     y.domain([0, d3.max(frequencyData, function(d) { return d * 2; })]);

     svg.selectAll("path")
     .attr('d', valueline(frequencyData))
     .attr('stroke', function(d){
        return graphColors(d);
     })
     .attr({
      'stroke-width': 2,
      'fill': 'none'
    })


 }

  renderChart();

};

