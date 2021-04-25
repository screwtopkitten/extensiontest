console.log("Chrome Extension Ready to go?")



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message.txt);
    if(message.txt === "hello"){
        let paragraphs = document.getElementsByTagName('p');
        for(elt of paragraphs){
            elt.style['background-color'] = '#8A2BE2';
        }
            
    }
}