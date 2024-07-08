const { expect, test } = require('@playwright/test');
const sleep = require('util').promisify(setTimeout)

test('BStack local is working', async ({ page }) => {
  await page.goto('http://bs-local.com:45454/');
  //await page.setViewportSize({ width: 2880, height: 1800 });
  const title = await page.title();
  expect(title).toContain('BrowserStack Local');
});
