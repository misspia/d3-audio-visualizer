var graphs = [
	"radial", "frequency", "wave"
];

var vizContainer = document.getElementById('viz');
var graphOptionsContainer = document.getElementById('graph-options');

var graph;
var defaultGraph = 0;

for(i = 0; i < graphs.length; i++){

	graphOption = document.createElement('span');
	graphLabel = document.createTextNode(graphs[i]);

	graphOption.appendChild(graphLabel);
	graphOption.setAttribute('class', 'row center align-center full-height');
	graphOption.setAttribute('onclick', 'setGraph(this,"' + graphs[i] + '")');

	if(defaultGraph == i) {
		
		graphOption.className += ' active';
		selectGraph(graphs[i]);
	}

	graphOptionsContainer.appendChild(graphOption);
}

var graph = graphs[defaultGraph];
function setGraph(el, graph){
	
	activeGraphTab(el);

	if(vizContainer.childNodes.length > 0){

		vizContainer.removeChild(vizContainer.childNodes[0]);
		
	} else {

		console.log('no children');
	}

	selectGraph(graph);
}

function selectGraph(graphInput){
	graph = graphInput;

	switch(graph) {

		case "radial":

			radialVisualization();
			break;

		case "frequency":	

			frequencyVisualization();
			break;

		case "wave":

			waveVisualization();
			break;
	}
}


graphTabs = document.querySelectorAll('#graph-options span');

function activeGraphTab(el){

	for(i = 0; i < graphTabs.length; i++){
		graphTabs[i].classList.remove('active');
	}

	el.className += " active";
}