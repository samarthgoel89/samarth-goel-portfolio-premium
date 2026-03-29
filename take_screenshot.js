const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 8000 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    // Reveal all elements to make sure animations don't hide them
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    document.querySelectorAll('.is-hidden').forEach(el => el.classList.remove('is-hidden'));
  });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: process.argv[2], fullPage: true });
  await browser.close();
})();
