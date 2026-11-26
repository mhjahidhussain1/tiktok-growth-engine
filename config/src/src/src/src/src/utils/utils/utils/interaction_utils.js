const puppeteer = require('puppeteer');

async function performRandomInteractions() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.tiktok.com');

  // رینڈم اسکرولنگ
  await page.evaluate(() => {
    window.scrollBy(0, Math.floor(Math.random() * 1000));
  });

  // رینڈم ویڈیوز پر لائک، کمنٹ، شیئر کریں
  const videos = await page.$$('div.video-feed');
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  await randomVideo.click();
  await page.waitForTimeout(2000);

  // رینڈم لائک
  await page.click('button[data-e2e="like"]');

  // رینڈم کمنٹ
  const comments = ['Nice!', 'Great video!', 'Awesome!', 'Love it!'];
  const randomComment = comments[Math.floor(Math.random() * comments.length)];
  await page.type('textarea.comment-input', randomComment);
  await page.click('button[data-e2e="comment-button"]');

  console.log("Random interactions performed!");
  await browser.close();
}

module.exports = { performRandomInteractions };
