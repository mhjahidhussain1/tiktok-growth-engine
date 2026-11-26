const puppeteer = require('puppeteer');

async function uploadVideo(video, timezone) {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      `--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36`,
      `--window-size=1920x1080`
    ]
  });

  const page = await browser.newPage();
  await page.goto('https://www.tiktok.com/upload');

  // ویڈیو اپلوڈ کریں
  const [fileChooser] = await Promise.all([
    page.waitForFileChooser(),
    page.click('#upload-button')
  ]);
  await fileChooser.accept([video.path]);

  // ویڈیو کی تفصیلات بھریں
  await page.type('#title', video.title);
  await page.type('#description', video.description);
  await page.click('#post-button');

  console.log(`Video "${video.title}" uploaded successfully!`);
  await browser.close();
}

module.exports = { uploadVideo };
