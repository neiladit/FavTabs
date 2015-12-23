
var fb1 = true;
var qr1 = true;
var gmail1 = true;
var intern1  true;

function openall(){
    
    chrome.windows.getAll({"populate" : true},checkTabs);
    
    function checkTabs(tab_array){
        
        for(var i=0;i<tab_array.length;i++)
	{
	    if(tab_array[i].url=='http://facebook.com/') fb1 = false;
	    if(tab_array[i].url=='http://quora.com/') qr1 = false;
	    if(tab_array[i].url=='http://gmail.com/') gmail1 = false;
	    if(tab_array[i].url=='http://placements.iitb.ac.in/trainingblog/') intern1 = false;
	    
	}
        
    if(fb1){
    
        var fb = window.open('http://fb.com/', '_blank');
        if(fb){
            fb.focus();
        }else{
            alert('Please allow popups for this site');
        }
    }
    
    if(qr1){
    
        var qr = window.open('http://quora.com/', '_blank');
        if(qr){
            qr.focus();
        }else{
            alert('Please allow popups for this site');
        }
    }
    
    if(gmail1){
        var gmail = window.open('http://gmail.com/', '_blank');
        if(gmail){
            gmail.focus();
        }else{
            alert('Please allow popups for this site');
        }
    }
    
    if(intern1) {
        var intern = window.open('http://placements.iitb.ac.in/trainingblog/', '_blank');
        if(intern){
            intern.focus();
        }else{
            alert('Please allow popups for this site');
        }
    }
    }

}

chrome.browserAction.onClicked.addListener(openall);
