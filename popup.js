document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".clickButton");

  toggleButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "toggleActivation" }),
      function (response) {
        if (response.isActive) {
          toggleButton.classList.add("active");
        } else {
          toggleButton.classList.remove("active");
        }
      };
  });
});
