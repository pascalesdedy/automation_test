import { test, expect } from '@playwright/test';
import { JoinPage } from '../page_objects/join_page';
import { VerifyOtpPage } from '../page_objects/verify_otp_page';

test.describe('Test halaman join cermati', () => {
  let joinPage: JoinPage;
  let verifyOtpPage: VerifyOtpPage;

  test.beforeEach(async ({ page }) => {
    joinPage = new JoinPage(page);
    await joinPage.navigateTo('/app/gabung');
  });

// positive case
  test('Positive case: should display correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Daftar/);
  });
  test('Positive case: should be able to input phone number', async ({ page }) => {
    await joinPage.textBoxNoHp.fill('085641417511');
    await expect(joinPage.textBoxNoHp).toHaveValue('085641417511');
  })
  test('Positive case: should be able to input email', async ({ page }) => {
    await joinPage.textBoxEmail.fill('pascales.dedy@yopmail.com');
    await expect(joinPage.textBoxEmail).toHaveValue('pascales.dedy@yopmail.com');
  })
  test('Positive case: should be able to input first name', async ({ page }) => {
    await joinPage.textBoxNamaDepan.fill('Pascales');
    await expect(joinPage.textBoxNamaDepan).toHaveValue('Pascales');
  })
  test('Positive case: should be able to input last name', async ({ page }) => {
    await joinPage.textBoxNamaBelakang.fill('Kurniawan');
    await expect(joinPage.textBoxNamaBelakang).toHaveValue('Kurniawan');
  })
  test('Positive case: Syarat dan ketentuan Link is redirect to correct page', async ({ page }) => {
    await joinPage.snkLink.click();
    await expect(page).toHaveTitle(/Syarat dan Ketentuan/);
  })
  test('Positive case: Kebijakan privasi Link is redirect to correct page', async ({ page }) => {
    await joinPage.kbLink.click();
    await expect(page).toHaveTitle(/Kebijakan Privasi/);
  })
  test('Positive case: should be able to click daftar button', async ({ page }) => {
    verifyOtpPage = new VerifyOtpPage(page);

    const captcha = page.locator('iframe[src*="recaptcha/api2/anchor"]');
    const hasCaptcha = await captcha.count() > 0;
    if (hasCaptcha) {
      test.skip(true, 'Skipped karena ada recaptcha');
    }
    await joinPage.textBoxNoHp.fill('085232229774');
    await joinPage.textBoxEmail.fill('test.aja01@yopmail.com');
    await joinPage.textBoxNamaDepan.fill('John');
    await joinPage.textBoxNamaBelakang.fill('Smith');
    await joinPage.buttonDaftar.click();
    await expect(verifyOtpPage.headingVerifyOtp).toBeVisible();
    await expect(verifyOtpPage.textNoHp).toBeVisible();
  })

// negative case
  test('Negative case: input invalid phone number format', async ({ page }) => {
    await joinPage.textBoxNoHp.fill('12345678');
    await joinPage.textBoxEmail.click();
    await expect(joinPage.errorNoHpText).toBeVisible();
  })
  test('Negative case: input invalid email format', async ({ page }) => {
    await joinPage.textBoxEmail.fill('pascales');
    await joinPage.textBoxNamaDepan.click();
    await expect(joinPage.errorInvalidEmailText).toBeVisible();
  })
  test('Negative case: input invalid first name format', async ({ page }) => {
    await joinPage.textBoxNamaDepan.fill('12345678');
    await joinPage.textBoxNamaBelakang.click();
    await expect(joinPage.errorNamaDepanNumText).toBeVisible();
  })
  test('Negative case: input invalid last name format', async ({ page }) => {
    await joinPage.textBoxNamaBelakang.fill('12345678');
    await joinPage.textBoxNoHp.click();
    await expect(joinPage.errorNamaBelakangNumText).toBeVisible();
  })
  test('Negative case: input empty phone number', async ({ page }) => {
    await joinPage.textBoxNoHp.fill('');
    await joinPage.textBoxEmail.click();
    await expect(joinPage.errorEmptyNoHpText).toBeVisible();  
  })
  test('Negative case: input empty email', async ({ page }) => {
    await joinPage.textBoxEmail.fill('');
    await joinPage.textBoxNamaDepan.click();
    await expect(joinPage.errorEmptyEmailText).toBeVisible();
  })
  test('Negative case: input empty first name', async ({ page }) => {
    await joinPage.textBoxNamaDepan.fill('');
    await joinPage.textBoxNamaBelakang.click();
    await expect(joinPage.errorEmptyNamaDepanText).toBeVisible();
  })
  test('Negative case: input empty last name', async ({ page }) => {
    await joinPage.textBoxNamaBelakang.fill('');
    await joinPage.textBoxNoHp.click();
    await expect(joinPage.errorEmptyNamaBelakangText).toBeVisible();
  })
});