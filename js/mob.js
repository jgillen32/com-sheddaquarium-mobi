window.onload = prepareLinks;

function prepareLinks() {
	if (!document.getElementById || !document.getElementsByTagName) {
		return;
	}
	if (!document.getElementById("nav")) {
    	return;
	}
	var container = document.getElementById("nav");
	var theULs = container.getElementsByTagName("ul");
	var links = container.getElementsByTagName("a");
  
	for (var iU = 0; iU < theULs.length; iU++){
	  var checkULs = theULs.item(iU).getAttribute("id");
  		if (checkULs == "tickets" || checkULs == "events" || checkULs == "membership"){
			theULs.item(iU).setAttribute("class", "hide");
		}
	}
	for (var i = 0; i < links.length; i++){
		var href = links[i].getAttribute("href");
		if (href.search('#tickets') >= 0 || href.search('#events') >= 0 || href.search('#membership') >= 0){
			links[i].setAttribute('class', 'expand');			
			links[i].onclick = showHide;
		} else if (href.search("ticketmaster.com") >= 0 || href.search("citypass.com") >= 0 ){			
			links[i].setAttribute('class', 'button');		
			links[i].setAttribute('title', 'Purchase this ticket');
		} else if (href.search("#") >= 0 && href.search("#") <= 1) {
			links[i].onclick = showHide;
			links[i].setAttribute('class', 'collapse');
		} else {
			links[i].setAttribute('class', 'arrow');
		}
		
		
	}
}

function showHide(e){
	e = e||window.event;
	e.preventDefault();
	var theElement = e.target||e.srcElement;
	var theElementHref = theElement.getAttribute("href");
	if (theElementHref == null || theElementHref == ''){
		var theElement = theElement.parentNode;
		var theElementHref = theElement.getAttribute("href");
	}
	var divID = theElementHref.split("#");
	var theUrl = divID[0];
	var theDiv = document.getElementById(divID[1]);
	
	if (theUrl == '' || theUrl == null) {
		var visible = theDiv.getAttribute("class");
					
		if (visible == "show" || visible == null || visible == ''){
			theDiv.setAttribute("class", "hide");
			theElement.setAttribute("class","expand");
			
		} else {
			theDiv.setAttribute("class", "show");
			theElement.setAttribute("class","collapse");
		}
	} else {
		window.location = theElementHref;
	}
}