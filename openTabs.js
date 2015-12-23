


alert("here");
console.log("Hello, world!");

function openall(){
    
	var fb1 = true;
	var qr1 = true;
	var gmail1 = true;
	var intern1 =true;
    	
	chrome.tabs.getAllInWindow(null, function(tabs){
    for (var i = 0; i < tabs.length; i++) {
		
		console.log(tabs[i].url);
		console.log(tabs[i].title);
		
	var prefix = /^https?:\/\//i;
    var domain = /^[^\/]+/;
   
    tabs[i].url = tabs[i].url.replace(prefix, "");
    
    if (tabs[i].url.charAt(0) === "/") {
        tabs[i].url = window.location.hostname + tabs[i].url;
    }
    
    var match = tabs[i].url.match(domain);
    if (match) {
        console.log(match[0]);
    }
	    if(match[0]=='www.facebook.com') fb1= false;
		
	    if(match[0]=='www.quora.com') qr1 = false;
		
	    if(match[0]=='mail.google.com') gmail1 = false;
		
	    if(match[0]=='placements.iitb.ac.in') intern1 = false;
		
		
		
	}
    
     if(fb1){
    
        var fb = window.open('http://fb.com/', '_blank');
        if(fb){
            fb.focus();
        }else{
            alert('Please allow popups for this site');
        }
    }
	else alert("Facebook Already open");
    
    if(qr1){
    
        var qr = window.open('http://quora.com/', '_blank');
        if(qr){
            qr.focus();
        }else{
            alert('Please allow popups for this site');
        }
    }
	else alert("Quora Already open");
    
    if(gmail1){
		console.log("Hello");
        var gmail = window.open('http://gmail.com/', '_blank');
        if(gmail){
            gmail.focus();
        }else{
            alert('Please allow popups for this site');
        }
    }
	else alert("Gmail Already open");
    
    if(intern1) {
        var intern = window.open('http://placements.iitb.ac.in/trainingblog/', '_blank');
        if(intern){
            intern.focus();
        }else{
            alert('Please allow popups for this site');
        }
	}
	else alert("Placement Blog Already open"); 

});

}


chrome.browserAction.onClicked.addListener(openall);

