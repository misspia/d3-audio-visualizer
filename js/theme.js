var themes = {
	warm: {
		r: 255,
		g: 180,
		b: 0
	},
	cool: {
		r: 0,
		g: 223,
		b: 255
	}
};

var themeContainer = document.getElementById('themes');
elapsedTimeBar = document.getElementById('elapsed-time');


for(var theme in themes){

	themeOption = document.createElement('span');
	themeLabel = document.createTextNode(theme);

	themeOption.appendChild(themeLabel);
	themeOption.setAttribute('onclick', 'setTheme(this, "' + theme + '")');

	themeContainer.appendChild(themeOption);

}



var theme = 'warm';
function setTheme(el, themeInput) {

	theme = themeInput;

	activeThemeTab(el)
	staticColors(theme);

	return theme;

}

function graphColors(d){
	
	switch(theme) {
		case "cool":
			return d3.rgb(d, 223, 255);
			break;
		case "warm":
			return d3.rgb(255, 180, d);
			break;
	}

}


function staticColors(theme){

	color = themes[theme];

	elapsedTimeBar.style.backgroundColor = 'rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';
}



themeTabs = document.querySelectorAll('#themes span');

function activeThemeTab(el){

	for(i = 0; i < themeTabs.length; i++){
		themeTabs[i].classList.remove('active');
	}

	el.className = "active";
}