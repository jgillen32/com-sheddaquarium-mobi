(function(){
    
    function readCookie(name) {
    var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
    }
    
    var x = readCookie('SHEDDMOBILE');
    
    if (x) {
    //[do something with x]

    // set the navigator string
    var a = navigator.userAgent||navigator.vendor||window.opera;
    
        // search the string for some usual suspects
        if(a.search(/android|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)/i) >= 0) {
            
            // for cookie fun
            var exdate = new Date();
            var h = exdate.setHours(24);
            exdate.setDate(exdate.getDate() + h);
            var expiry= exdate.toUTCString();
            
            // set cookie
            document.cookie = "name=SHEDDMOBILE";
            document.cookie = "mobile=true";
            document.cookie = "expires="+expiry;
            
            // This is likely a mobile device. Hopefully they have javaScript enabled...
            // If you are reading this code, DON'T do this. Ever.
            // This is my final protest. 
            // This is a terrible idea.
            
            // Letting go, moving on.
            
            // Redirect
            window.location = "http://www.sheddaquarium.org/mobi";    
        }    
    }
})();