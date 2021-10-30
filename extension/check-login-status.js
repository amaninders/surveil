function isLoggedIn(callback) {
  chrome.storage.local.get(["userStatus"], response => {
    callback(!!response.userStatus);
  });
}

isLoggedIn(loggedIn => {
  const popupUrl = loggedIn ? "popup-welcome-back.html" : "popup-sign-in.html";
  window.location.href = popupUrl;
});