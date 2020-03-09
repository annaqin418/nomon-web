# nomon-web

## Miscellaneous Notes
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
