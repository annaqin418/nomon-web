// Set up event handlers and inject send_links.js into all frames in the active
// tab.
window.onload = function () {
  // document.getElementById('filter').onkeyup = filterLinks;
  // document.getElementById('regex').onchange = filterLinks;
  // document.getElementById('toggle_all').onchange = toggleAll;
  // document.getElementById('download0').onclick = downloadCheckedLinks;
  // document.getElementById('download1').onclick = downloadCheckedLinks;

  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({ active: true, windowId: currentWindow.id },
      function (activeTabs) {
        // chrome.tabs.executeScript(
        //   activeTabs[0].id, {file: 'send_links.js', allFrames: true});
        // chrome.tabs.executeScript(null,{file: "highlight.js"});
        chrome.tabs.executeScript(null, { file: "select_link.js" });
      });
  });
};