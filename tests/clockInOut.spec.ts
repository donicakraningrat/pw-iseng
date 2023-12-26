import { test, expect } from '@playwright/test';

test('Clock In', async ({ page },testInfo) => {
  await page.goto('https://account.mekari.com/users/sign_in');
  await expect(page).toHaveTitle(/Mekari Account/);
  await page.getByLabel('Email').fill('doni.cakraningrat@prakerja.go.id');
  await page.getByLabel('Password').fill('D1k@nt0r');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('button', { name: 'Masuk ke Talenta' }).click();
  await page.getByRole('link', { name: 'Live attendance' }).click();
  await expect(page.locator("#tl-live-attendance-index > div > div.tl-header.hide-on-mobile > div > h1")).toHaveText("Live Attendance");
  await page.waitForLoadState("networkidle");

  await page.getByRole('button', { name: 'Clock In' }).click();
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
});


test('Clock Out', async ({ page },testInfo) => {
  await page.goto('https://account.mekari.com/users/sign_in');
  await expect(page).toHaveTitle(/Mekari Account/);
  await page.getByLabel('Email').fill('doni.cakraningrat@prakerja.go.id');
  await page.getByLabel('Password').fill('D1k@nt0r');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('button', { name: 'Masuk ke Talenta' }).click();
  await page.getByRole('link', { name: 'Live attendance' }).click();
  await expect(page.locator("#tl-live-attendance-index > div > div.tl-header.hide-on-mobile > div > h1")).toHaveText("Live Attendance");
  await page.waitForLoadState("networkidle");

  const rndInt = Math.floor(Math.random() * 20) + 1;
  await sleep(rndInt * 60 * 1000);
  await page.getByRole('button', { name: 'Clock Out' }).click();
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
});
const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))
