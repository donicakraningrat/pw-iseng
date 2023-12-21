import { test, expect } from '@playwright/test';

test('Clock In', async ({ page }) => {
  await page.goto('https://account.mekari.com/users/sign_in');
  await expect(page).toHaveTitle(/Mekari Account/);
  await page.getByLabel('Email').fill('doni.cakraningrat@prakerja.go.id');
  await page.getByLabel('Password').fill('D1k@nt0r');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('button', { name: 'Masuk ke Talenta' }).click();
  await page.getByRole('link', { name: 'Live attendance' }).click();
  await expect(page.locator("#tl-live-attendance-index > div > div.tl-header.hide-on-mobile > div > h1")).toHaveText("Live Attendance");
  await page.waitForLoadState("networkidle");

  const rndInt = Math.floor(Math.random() * 4) + 1;
  console.log(rndInt);
  await sleep(rndInt * 60 * 1000);
  await page.getByRole('button', { name: 'Clock In' }).click();
  // await page.screenshot();
});


test('Clock Out', async ({ page }) => {
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
  // await page.screenshot();
});
const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))
