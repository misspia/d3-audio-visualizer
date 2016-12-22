var graphs = [
	"radial", "frequency", "wave"
];

var vizContainer = document.getElementById('viz');
var graphOptionsContainer = document.getElementById('graph-options');


for(i = 0; i < graphs.length; i++){

	graphOption = document.createElement('span');
	graphLabel = document.createTextNode(graphs[i]);

	graphOption.appendChild(graphLabel);
	graphOption.setAttribute('onclick', 'setGraph(this,"' + graphs[i] + '")');

	graphOptionsContainer.appendChild(graphOption);
}

function setGraph(el, graph){
	
	activeGraphTab(el);

	if(vizContainer.childNodes.length > 0){

		vizContainer.removeChild(vizContainer.childNodes[0]);
		
	} else {

		console.log('no children');
	}

	selectGraph(graph);
}


function selectGraph(graph){

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
console.log(graphTabs);

function activeGraphTab(el){

	for(i = 0; i < graphTabs.length; i++){
		graphTabs[i].classList.remove('active');
	}

	el.className = "active";
}