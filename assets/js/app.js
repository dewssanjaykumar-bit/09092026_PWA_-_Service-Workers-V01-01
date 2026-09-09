// 1. Counter functionality
let count = 0;
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// 2. Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope,
        );
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}
