//// kill browser
/// Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222      

const { chromium } = require('playwright');

(async () => {
    try {
        const browser = await chromium.connectOverCDP('http://localhost:9222');

        console.log(browser.isConnected() && 'Connected to Chrome.');
        console.log(`Contexts in CDP session: ${browser.contexts().length}.`);

        const context = browser.contexts()[0];
        const page = context.pages()[0];
        

        // const spage = await context.newPage();
        await page.goto('https://bing.com');
        // await page.screenshot({ path: 'example.png' });

        // await page.close();
        await context.close();
        // await browser.close();
    } catch (error) {
        console.log('Cannot connect to Chrome.');
    }
})();