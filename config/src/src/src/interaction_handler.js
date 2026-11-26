const { performRandomInteractions } = require('../utils/interaction_utils');

async function startInteractions() {
  setInterval(async () => {
    console.log("Performing random interactions...");
    await performRandomInteractions();
  }, 3600000); // ہر گھنٹے بعد انٹرایکشنز کریں
}

startInteractions();
