// Listen for messages from the popup
// const listen = () => {
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "click") {
    // Simulate a click on the specified element
    let targetElement = document.querySelector(request.selector);
    // const clickBtn = () => {
    if (targetElement) {
      targetElement.click();
      setTimeout(() => {
        sendResponse({ result: "success" });
      }, 100);
      return true;
    } else {
      sendResponse({ result: "error", message: "Element not found" });
      return false;
    }
    // };
    // setInterval(clickBtn, 1000);
  }
});
// };

// listen();
