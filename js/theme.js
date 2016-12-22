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
	themeOption.setAttribute('onclick', 'setTheme("' + theme + '")');

	themeContainer.appendChild(themeOption);

}

function setTheme(theme) {
	var color = themes[theme];
	
	elapsedTimeBar.style.backgroundColor = 'rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';

}



