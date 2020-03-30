// var allLinks = []

// chrome.extension.onRequest.addListener(function(links) {
//   for (let link of links) {
//     allLinks.push(link);
//   }
// });

function highlight(indices) {
  // first clear previous highlighting
  for (let i = 0; i < links.length; i++) {
    links[i].style.borderLeft = 'initial'
  }
  // rehighlight
  // for (let i of indices) {
  for (let i = 0; i < indices.length; i++) {
    links[indices[i]].style.borderLeft = '20px solid #000'
    links[indices[i]].animate([
        // keyframes
        { borderLeftColor: '#000' },
        { borderLeftColor: '#FFF' },
        { borderLeftColor: '#000' }
    ], {
        // timing
        delay: i % 10 * 500,
        duration: 3000,
        iterations: Infinity,
        easing: 'linear'
    })
  }
}

function selectLink(e) {
  e = e || window.event;
  if (e.keyCode == '16') { // shift key
    let narrowed = []

    for (let indexVal of curr) {
      let curColor = getComputedStyle(links[indexVal]).borderLeftColor
      let rgb = curColor.match(/\d+/g) // witchcraft

      if (rgb[0] > threshold) narrowed.push(indexVal)
    }
    if (narrowed.length == 0) return
    if (narrowed.length == 1) {
      console.log('redirect')
      let href = links[narrowed[0]].href
      window.location.href = href;
      return
    }
    curr = narrowed
    highlight(curr)
  }

  // *** activate/deactivate as desired?
  // if (e.keyCode == '74') { // 'j'
  //   chrome.browserAction.disable()
  // }
}


const threshold = 210 // seems like i can do 230-240
var links = document.getElementsByTagName('a') // all links on page. const? 
var curr = []
for (let i = 0; i < links.length; i++) curr.push(i)
highlight(curr)
document.onkeydown = selectLink;