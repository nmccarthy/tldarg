$(document).ready(function(){
	function injectScript(script)
	{
	    var elem = document.createElement("script");
	    elem.type = "text/javascript";
		elem.src = "https://raw.github.com/nmccarthy/tldarg/master/tldarg/js/tldarg.js"
	    return document.head.appendChild(elem);
	}

	injectScript();
});