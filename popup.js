document.getElementById('scrape').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { file: 'content_script.js' });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'showResult') {
    document.getElementById('result').innerHTML = `
      <h2>Product Information</h2>
      <p><strong>Name:</strong> ${request.productName}</p>
      <p><strong>Price:</strong> ${request.productPrice}</p>
      <p><strong>Image URL:</strong> <a href="${request.productImageUrl}" target="_blank">${request.productImageUrl}</a></p>
    `;
  }
});
