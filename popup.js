document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".clickButton");

  toggleButton.addEventListener("click", function () {
    toggleButton.classList.toggle("active");
    chrome.runtime.sendMessage({ action: "toggleActivation" });
  });
});
