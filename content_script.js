function scrapeProductInformation() {
  const productName = document.querySelector('.goods-name').textContent.trim();
  const productPrice = document.querySelector('.goods-price').textContent.trim();
  const productImageUrl = document.querySelector('.goods-img img').getAttribute('src');

  return {
    productName,
    productPrice,
    productImageUrl
  };
}

const result = scrapeProductInformation();

chrome.runtime.sendMessage({
  action: 'showResult',
  productName: result.productName,
  productPrice: result.productPrice,
  productImageUrl: result.productImageUrl
});
