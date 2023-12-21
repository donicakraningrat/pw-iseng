// const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.

// (async () => {
//   const browser = await chromium.launch({headless:false});
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   // other actions...
//   // await browser.close();
// })();


const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch({ headless: true });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  await page.goto("http://google.com/", { waitUntil: "networkidle" });
  const date = new Date();
  await page.screenshot({ path: `${date}.png` });

  await page.close();
  await ctx.close();
  await browser.close();
})();
