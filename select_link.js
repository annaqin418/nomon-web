
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
        delay: i % 6 * 500,
        duration: 3000,
        iterations: Infinity,
        easing: 'linear'
    })
  }
}

function selectLink(e) {
  e = e || window.event;
  if (e.keyCode == '192') { // '16') { // shift key vs ` key
    if (curr.length == initLen && !toggledOn) {
      highlight(curr)
      toggledOn = true
      return
    }

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
}


const threshold = 210 // can get approx 230-240 with focus
const links = document.getElementsByTagName('a') // all links on page
var curr = []
var toggledOn = false
const initLen = links.length
for (let i = 0; i < initLen; i++) curr.push(i)

document.onkeydown = selectLink;