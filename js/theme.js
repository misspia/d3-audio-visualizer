var themes = {
	warm: '',
	cool: ''
};

var themeContainer = document.getElementById('themes');



for(var theme in themes){

	themeOption = document.createElement('span');
	themeLabel = document.createTextNode(theme);

	themeOption.appendChild(themeLabel);
	themeOption.setAttribute('onclick', 'test(" ' + theme + ' ")');

	themeContainer.appendChild(themeOption);

}

function test(theme) {
	console.log(theme);
}



