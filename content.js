//Code to inject custom script
function injectJs(srcFile) {
 var scr = document.createElement('script');
 scr.type="text/javascript";
 scr.src=srcFile;
 document.getElementsByTagName('head')[0].appendChild(scr);
}
//Inject it
injectJs(chrome.extension.getURL('script.js'));