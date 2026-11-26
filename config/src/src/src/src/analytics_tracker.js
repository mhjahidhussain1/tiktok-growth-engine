const { trackAnalytics } = require('../utils/analytics_utils');

async function startTracking() {
  setInterval(async () => {
    console.log("Tracking analytics...");
    await trackAnalytics();
  }, 86400000); // روزانہ ٹریکنگ کریں
}

startTracking();
