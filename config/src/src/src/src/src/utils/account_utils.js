const puppeteer = require('puppeteer');

async function generateAccount(proxy, device, timezone) {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      `--proxy-server=${proxy.ip}:${proxy.port}`,
      `--user-agent=${device.user_agent}`,
      `--window-size=${device.screen_resolution}`
    ]
  });

  const page = await browser.newPage();
  await page.goto('https://www.tiktok.com/signup');

  // اکاؤنٹ بنانے کا کوڈ (جی میل، فون نمبر، بائیو، پروفائل پکچر وغیرہ)
  await page.type('#email', `user${Math.floor(Math.random() * 1000)}@gmail.com`);
  await page.type('#password', 'SecurePassword123!');
  await page.click('#signup-button');

  // ٹائم زون سیٹ کریں
  await page.evaluate((timezone) => {
    Intl.DateTimeFormat().resolvedOptions().timeZone = timezone;
  }, timezone.timezone);

  console.log(`Account created with proxy: ${proxy.ip}:${proxy.port}`);
  await browser.close();
}

module.exports = { generateAccount };
