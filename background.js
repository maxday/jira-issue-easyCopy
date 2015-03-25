chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, { text: "report_back" }, sendToClipbord);	
});
 
function sendToClipbord(myString) {
	var input = document.createElement('textarea');
	document.body.appendChild(input);
	
	input.value = myString;
	input.focus();
	input.select();
		
	document.execCommand('Copy');
	input.remove();
}