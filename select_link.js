
// Apply Nomon highlighting to the elements at the input indices
function highlight(indices) {
  // first clear previous highlighting
  clear_highlight()
  // highlight 
  for (let i = 0; i < indices.length; i++) {
    links[indices[i]].style.borderLeft = '20px solid #000'
    links[indices[i]].animate([
        // keyframes
        { borderLeftColor: '#000' },
        { borderLeftColor: '#FFF' }
    ], {
        // timing
        delay: i % 6 * 500,
        duration: 1500,
        iterations: Infinity,
        easing: 'linear',
        direction: 'alternate'
    })
  }
}

// Apply confirmation highlighting to the element at the input index
function confirm_highlight(index) {
  // first clear previous highlighting
  clear_highlight()
  // apply confirmation highlighting
  links[index].style.border = '10px solid #000'
  links[index].animate([
      // keyframes
      { borderColor: '#0F0' },
      { borderColor: '#000' }
  ], {
      // timing
      duration: 3000,
      iterations: 1,
      easing: 'ease-in',
      fillMode: 'forwards'
  }) 
}

// Clear highlighting animation from all link elements
function clear_highlight() {
  for (let i = 0; i < links.length; i++) {
    links[i].style.border = 'initial'
  }
}

// Narrow down link selection every time switch is clicked
function selectLink(e) {
  e = e || window.event;
  if (e.keyCode == '192') { // 16 CAPSLOCK, '192' backquote, 20 shift key 
    // if this is the first click for this webpage
    if (curr.length == initLen && !toggledOn) { 
      highlight(curr)
      toggledOn = true
      return
    }
    // if we are confirming link selection
    if (isConfirming) {
      let elapsedTime = Date.now() - startConfirmTime
      console.log(elapsedTime)
      if (elapsedTime < 3000) {
        // successfully confirmed within time limit; redirect
        console.log('redirect')
        let href = links[curr[0]].href
        window.location.href = href
        return
      }
      else {
        // restart selection process
        curr = []
        for (let i = 0; i < initLen; i++) curr.push(i)
        toggledOn = false
        isConfirming = false
        clear_highlight()
        return 
      }
    }

    // create narrowed-down list
    let narrowed = []
    for (let indexVal of curr) {
      let curColor = getComputedStyle(links[indexVal]).borderLeftColor
      let rgb = curColor.match(/\d+/g) // witchcraft

      if (rgb[0] > threshold) narrowed.push(indexVal)
    }
    // take action 
    if (narrowed.length == 0) return
    if (narrowed.length == 1) {
      // begin confirmation process
      curr = narrowed
      confirm_highlight(curr[0])
      startConfirmTime = Date.now()
      isConfirming = true
      return
    }
    // rehighlight for next click
    curr = narrowed
    highlight(curr)
    return
  }
}

// initialization
const threshold = 210 // can get approx 230-240 with focus
const links = document.getElementsByTagName('a') // all links on page
const initLen = links.length
console.log(initLen) // for eval
var curr = []
var toggledOn = false
var isConfirming = false
var startConfirmTime

for (let i = 0; i < initLen; i++) curr.push(i)

document.onkeydown = selectLink;