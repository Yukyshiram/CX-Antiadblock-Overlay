chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { cancel: true };
  },
  {
    urls: [
      "*://*/anti-adblock*.js*",
      "*://*/adblock-detector*.js*",
      "*://*/blockadblock*.js*",
      "*://*/ads.js*"
    ]
  },
  ["blocking"]
);
