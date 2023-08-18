let extensionActive = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleActivation") {
    extensionActive = !extensionActive;
    if (extensionActive) {
      // Send a message to the content script to simulate a click
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {
            action: "click",
            selector: ".watch-video--skip-content-button",
          },
          function (response) {
            if (response.result === "success") {
              console.log("Click successful");
              sendResponse({ isActive: extensionActive });
            } else {
              console.error("Click failed:", response.message);
            }
          }
        );
      });
      //   alert(extensionActive);
    } else {
      console.log("Extension deactivated.");
    }
    //send response to popup
    sendResponse({ isActive: extensionActive });
  }
});
