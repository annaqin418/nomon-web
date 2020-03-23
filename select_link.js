// var allLinks = []

// chrome.extension.onRequest.addListener(function(links) {
//   for (let link of links) {
//     allLinks.push(link);
//   }
// });

function checkKey(e) {
	e = e || window.event;
  if (e.keyCode == '16') { // shift
    let curColor = getComputedStyle(links[0]).borderLeftColor
    let rgb = curColor.match(/\d+/g) // witchcraft
    
    console.log(rgb[0])
    if (rgb[0] > threshold) {
      console.log('redirect')
      let href = links[0].href
      window.location.href = href;
    }

  }
  // if (e.keyCode == '74') { // 'j'
  //   chrome.browserAction.disable()
  // }
}

var links = document.getElementsByTagName('a')
var threshold = 220 // seems like i can do 230-240
document.onkeydown = checkKey;