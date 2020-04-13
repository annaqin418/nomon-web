# nomon-web

## (04/13):
Realized that my thought about persistence across pages was actually somewhat erroneous. 
It would actually be better if upon reload, the highlighting was off by default (because it's way too cluttering and distracting to use normally), and only turned on when you made a first switch press. So, something more similar to what I originally had. 

TODO: fix toggling per above, consider parameter customization

TODO: evaluation experiment, presentation, paper

TODO: cite source code (if necessary; I've made heavy modifications to backbones at this point)

------------------------------------------
## (04/05):

### Notes
Changed popup.js to popup2.js
Moved to content script (so no longer uses popup at all)
(Later, popup can be used for parameter customization, but consider after presentation.)

Limitations:
Selection of more onscreen features: click() https://www.w3schools.com/jsref/met_html_click.asp 
However, I think obtaining the clickable events and adjusting the logic thereof would be too complex to accomplish

Further work: 
A persistent popup on the page? place additional buttons
Scroll (pagedown), right-click, go back a page, other browser management 
Integration with Nomon keyboard

IMPORTANT: Need to source all the code I borrowed/adapted!

------------------------------------------
## (03/08):

### Progress to date
Background research - particularly the Nomon paper (Broderick and MacKay, 2009)
Created Chrome extension to highlight links on webpage; activates with keyboard shortcut
Extension currently displays animated color-changing border next to link
On keypress, navigates to certain link on webpage

### Current difficulties:
Toggling extension on/off
Interaction with unusual webpages / links
May need to refactor code

### Next steps:
Implementing timing logic for one and multiple items

------------------------------------------

## Miscellaneous Notes (pre-03/08):
may need jquery instead - rewriting what already have?

Keyboard shortcut to activate (ctrl shift f) - maybe something diff
document.getElementById('links');
sample: Download Selected Links - Select links on a page and download them.
sample: event page example 
sample: WebNavigation Tech Demo? 
sample: Constant Context - Highlights elements with keywords on developer.chrome

Potential options page for clock parameter customizability

page actions and browser actions! still dunno the difference
commands api?
declarative content? 
devtools.inspectedwindow - getResources, setResources
(devtools.panels) - may not be strictly necessary 
tabs.executeScript
(chrome.events ? - listeners, rules)
chrome.runtime for various things... 

Toggling on/off? 
  "background": {
    "scripts": ["highlight.js"],
    "persistent": true
  },
see https://stackoverflow.com/questions/39843647/keep-chrome-extension-running-on-page-reload
also maybe https://stackoverflow.com/questions/24041504/chrome-extension-is-it-possible-to-keep-extension-open-on-reload

## References
youtube tutorial for general extension stuff: https://www.youtube.com/playlist?list=PLC3y8-rFHvwg2-q6Kvw3Tl_4xhxtIaNlY
