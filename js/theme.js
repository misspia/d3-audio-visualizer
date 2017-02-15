var themes = {
	warm: {
		r: 255,
		g: 180,
		b: 0, 
		defaultActive: true
	},
	cool: {
		r: 0,
		g: 223,
		b: 255,
		defaultActive: false
	},
	forest:{
		r:0,
		g: 255,
		b:140,
		defaultActive:false
	},
	santa:{
		r:255,
		g: 0,
		b:55,
		defaultActive:false
	}

};

var themeContainer = document.getElementById('themes'),
	elapsedTimeBar = document.getElementById('elapsed-time'),
	mainContainer = document.getElementById('main');
	
// var theme;

for(var theme in themes){

	themeOption = document.createElement('span');
	themeLabel = document.createTextNode(theme);

	themeOption.appendChild(themeLabel);
	themeOption.setAttribute('class', 'row center align-center full-height');
	themeOption.setAttribute('onclick', 'setTheme(this, "' + theme + '")');

	if(themes[theme]['defaultActive'] == true){

		themeOption.className += ' active';
		mainContainer.setAttribute('class', theme);
		
	}

	themeContainer.appendChild(themeOption);
}

//default theme
var theme = 'warm';

function setTheme(el, themeInput) {

	theme = themeInput;

	activeThemeTab(el)
	setDomTheme(theme);

	return theme;

}

function graphColors(d){
	
	color = themes[theme];

	switch(theme) {
		case "cool":
			return d3.rgb(d, color.g, color.b);
			break;
		case "warm":
			return d3.rgb(color.r, color.g, d);
			break;
		case "forest":
			return d3.rgb(d, color.g, color.b);
			break;
		case "santa":
			return d3.rgb(color.r, d, d);
			break;
	}

}


function setDomTheme(theme){
	mainContainer.setAttribute('class', theme);
}


themeTabs = document.querySelectorAll('#themes span');

function activeThemeTab(el){

	for(i = 0; i < themeTabs.length; i++){
		themeTabs[i].classList.remove('active');
	}

	el.className += " active";
}