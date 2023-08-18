let extensionActive = false;

function clickButton() {
  //   chrome.browserAction.onClicked.addListener(function (tab) {
  // Do something when the extension button is clicked
  // Send a message to the content script to simulate a click
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "click", selector: ".watch-video--skip-content-button" },
      function (response) {
        if (response.result === "success") {
          console.log("Click successful");
        } else {
          console.error("Click failed:", response.message);
        }
      }
    );
  });
  //   });
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleActivation") {
    extensionActive = !extensionActive;
    if (extensionActive) {
      setInterval(clickButton, 1000);
    } else {
      console.log("Extension deactivated.");
    }
  }
});
