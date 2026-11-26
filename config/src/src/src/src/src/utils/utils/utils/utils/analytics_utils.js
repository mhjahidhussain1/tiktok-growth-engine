const puppeteer = require('puppeteer');

async function trackAnalytics() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.tiktok.com/analytics');

  // اینالٹکس ڈیٹا نکالیں
  const followers = await page.evaluate(() => {
    return document.querySelector('div.followers-count').textContent;
  });

  const views = await page.evaluate(() => {
    return document.querySelector('div.views-count').textContent;
  });

  console.log(`Analytics: Followers: ${followers}, Views: ${views}`);
  await browser.close();
}

module.exports = { trackAnalytics };
