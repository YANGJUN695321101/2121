chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrape_product") {
    chrome.tabs.executeScript(sender.tab.id, { file: "content.js" });
  }
});
