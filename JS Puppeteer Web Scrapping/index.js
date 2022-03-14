const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.kosherwine.com/yaffo-heritage-yaf-0010.html");

  const title = await page.evaluate(
    () => document.querySelector('h1').textContent
  );

  const squ = await page.evaluate(
    () => document.querySelector('.breadcrumbs .product').innerText
  );

  const img = await page.evaluate(
    () => document.querySelector('img').src
  );

  const description = await page.evaluate(
    () => document.querySelector('.product-description').innerText
  );

  console.log(title, squ, img, description);
  await browser.close();
})();