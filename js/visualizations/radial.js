function radialVisualization(colorScale) {
    'use strict';

    var svg = createSvg('#viz', svgHeight, svgWidth);

    function renderChart() {
        requestAnimationFrame(renderChart);

        // copy frequency data to frequencyData array.
        analyser.getByteFrequencyData(frequencyData);

        // scale things to fit
        var radiusScale = d3.scale.linear()
        .domain([0, d3.max(frequencyData)])
        .range([0, svgHeight/2 -10]);

        var colorScale = setColorScale(frequencyData);

       // update d3 chart with new data
       var circles = svg.selectAll('circle')
       .data(frequencyData);

       circles.enter().append('circle');

       circles
       .attr({
        r: function(d) { return radiusScale(d); },
        cx: svgWidth / 2,
        cy: svgHeight / 2,
        fill: 'none', 
        'stroke-width': 2,
        'stroke-opacity': 0.4,
        stroke: function(d) { return graphColors(colorScale(d)); }
    });

       circles.exit().remove(); 
   }

    // run animation loop
    renderChart();

};