const { generateAccount } = require('../utils/account_utils');
const proxies = require('../config/proxy_config.json').proxies;
const devices = require('../config/device_fingerprint.json').devices;
const timezones = require('../config/timezone_config.json').timezones;

async function generateAccounts(count) {
  for (let i = 0; i < count; i++) {
    const proxy = proxies[i % proxies.length];
    const device = devices[i % devices.length];
    const timezone = timezones[i % timezones.length];

    console.log(`Generating account ${i + 1}/${count}...`);
    await generateAccount(proxy, device, timezone);
  }
  console.log("All accounts generated successfully!");
}

generateAccounts(10); // 10 اکاؤنٹ جنریٹ کریں
