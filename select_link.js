// var allLinks = []

// chrome.extension.onRequest.addListener(function(links) {
//   for (let link of links) {
//     allLinks.push(link);
//   }
// });

function checkKey(e) {
	e = e || window.event;
	if (e.keyCode == '32') { // spacebar
    let href = links[0].href
    window.location.href = href;
  }
  // if (e.keyCode == '74') { // 'j'
  //   chrome.browserAction.disable()
  // }
}

var links = document.getElementsByTagName('a')
document.onkeydown = checkKey;