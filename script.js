//Injected function
function timerMethod() {
	//Refresh function
	$('.action_button:not(.reload_apps,.pin_control)').click();
	//Log it
	console.log("Zendesk Refresh Triggered");
}
//Refresh every 60 seconds
var timerId = setInterval(timerMethod, 60 * 1000); 
