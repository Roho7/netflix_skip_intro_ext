// content.js
function clickButton() {
  const button = document.querySelector(".watch-video--skip-content-button"); // Replace with the actual selector of the button you want to click
  if (button) {
    button.click();
  }
}

// Wait for the DOM to be ready
setInterval(clickButton, 1000);
