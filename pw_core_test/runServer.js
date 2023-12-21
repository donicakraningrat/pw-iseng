const { chromium } = require('playwright');

(async () => {
  const browserServer = await chromium.launchServer({headless:false,executablePath:"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"});
  const wsEndpoint = browserServer.wsEndpoint();
  console.log(wsEndpoint)
  await new Promise(() => null)
})();