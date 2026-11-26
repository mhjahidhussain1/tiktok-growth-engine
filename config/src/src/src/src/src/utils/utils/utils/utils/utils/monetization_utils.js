const puppeteer = require('puppeteer');

async function checkMonetizationEligibility() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.tiktok.com/creator-portal/monetization');

  // چیک کریں کہ کون سا اکاؤنٹ منیٹائزیشن کے لیے اہل ہے
  const eligibleAccounts = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('div.account')).map(account => ({
      name: account.querySelector('span.name').textContent,
      followers: account.querySelector('span.followers').textContent,
      eligible: account.querySelector('span.status').textContent === 'Eligible'
    }));
  });

  console.log("Monetization Eligibility:", eligibleAccounts);
  await browser.close();
}

module.exports = { checkMonetizationEligibility };
