const { checkMonetizationEligibility } = require('../utils/monetization_utils');

async function startMonetizationTracking() {
  setInterval(async () => {
    console.log("Checking monetization eligibility...");
    await checkMonetizationEligibility();
  }, 3600000); // ہر گھنٹے بعد چیک کریں
}

startMonetizationTracking();
