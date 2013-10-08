$(document).ready(function(){
	var jPM = $.jPanelMenu({
	    menu: '#menu',
	    trigger: '#menu-mobile',
	    duration: 300,
	    direction: "right",
	    openPosition: "200px",
	    animated: true,
	    easing: "ease-in"
	});

	jPM.on();
});