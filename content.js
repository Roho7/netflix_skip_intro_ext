// const observer = new MutationObserver(function (mutationsList) {
//   for (const mutation of mutationsList) {
//     if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
//       // Check if a dynamically added node is a button
//       for (const addedNode of mutation.addedNodes) {
//         if (
//           addedNode instanceof HTMLElement &&
//           addedNode.matches(".watch-video--skip-content-button")
//         ) {
//           // Perform actions on the dynamic button
//           addedNode.click();
//           alert("button is here"); // Simulate a click on the button
//           // You can add more actions or call other functions here
//         }
//       }
//     }
//   }
// });

// // Start observing the body element for changes
// observer.observe(document.body, { childList: true, subtree: true });

// Listen for messages from the popup
const listen = () => {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.action === "click") {
      // Simulate a click on the specified element
      let targetElement = document.querySelector(request.selector);
      if (targetElement) {
        targetElement.click();
        sendResponse({ result: "success" });
      } else {
        sendResponse({ result: "error", message: "Element not found" });
      }
    }
  });
};

setInterval(listen, 1000);
