
function openall(){
    
    var fb = window.open('http://fb.com/', '_blank');
    if(fb){
        fb.focus();
    }else{
        alert('Please allow popups for this site');
    }
    
    var qr = window.open('http://quora.com/', '_blank');
    if(qr){
        qr.focus();
    }else{
        alert('Please allow popups for this site');
    }
    
    var gmail = window.open('http://gmail.com/', '_blank');
    if(gmail){
        gmail.focus();
    }else{
        alert('Please allow popups for this site');
    }
    
    var intern = window.open('http://placements.iitb.ac.in/trainingblog/', '_blank');
    if(intern){
        intern.focus();
    }else{
        alert('Please allow popups for this site');
    }

}

chrome.browserAction.onClicked.addListener(openall);
