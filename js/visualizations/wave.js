function waveVisualization() {

  'use strict';

  var svg = createSvg('#viz', svgHeight, svgWidth);

  var valueline = d3.svg.line()
  .x(function(d, i) { return x(i); })
  .y(function(d) { return y(d) / 2; });

  var x = d3.scale.linear().range([0, svgWidth]);
  var y = d3.scale.linear().range([svgHeight, 0]);

  svg.append("path")
  .attr("class", "line")
  .attr("d", valueline(frequencyData));

  function renderChart() {
     requestAnimationFrame(renderChart);

     analyser.getByteFrequencyData(frequencyData);

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

