console.log("Chrome Extension Ready to go?")



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message);
    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {
      elt.innerHTML = message.txt;
    }
}