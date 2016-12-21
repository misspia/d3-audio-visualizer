// http://bl.ocks.org/eesur/6ad4ee84c81b664353a7
// http://blog.scottlogic.com/2016/01/06/audio-api-with-d3.html

(function() {
    'use strict';

    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var audioElement = document.getElementById('audio-element');
    var audioSrc = audioCtx.createMediaElementSource(audioElement);
    var analyser = audioCtx.createAnalyser();

    // bind analyser to media element source.
    audioSrc.connect(analyser);
    audioSrc.connect(audioCtx.destination);

    // var frequencyData = new Uint8Array(analyser.frequencyBinCount);
    var frequencyData = new Uint8Array(200);

    var svgHeight = window.innerHeight * 0.9,
        svgWidth = window.innerWidth;

    var svg = d3.select('#viz').append('svg')
        .attr({
            'height': svgHeight,
            'width': svgWidth,
            'class': 'col center align-center',
            'border': 'solid red 0.1em'
        });

    function renderChart() {
        requestAnimationFrame(renderChart);

        // copy frequency data to frequencyData array.
        analyser.getByteFrequencyData(frequencyData);
        // console.log(frequencyData);

        // scale things to fit
        var radiusScale = d3.scale.linear()
            .domain([0, d3.max(frequencyData)])
            .range([0, svgHeight/2 -10]);

        var hueScale = d3.scale.linear()
            .domain([0, d3.max(frequencyData)])
            .range([0, 255]);

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
                stroke: function(d) { return d3.rgb(hueScale(d), 223, 255); }
           });

        circles.exit().remove(); 
    }

    // run animation loop
    renderChart();

    // just for blocks viewer size
    d3.select(self.frameElement).style('height', '700px');

}());