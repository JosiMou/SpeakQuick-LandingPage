import { test, expect } from '@playwright/test';

test.describe('SpeakQuick Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/SpeakQuick/);
  });

  test('hero section is visible', async ({ page }) => {
    const heroHeading = page.getByRole('heading', { name: /Turn Audio Into Accurate Text/i });
    await expect(heroHeading).toBeVisible();
    
    const downloadButton = page.getByRole('button', { name: /Download for macOS/i });
    await expect(downloadButton).toBeVisible();
  });

  test('hero has waveform animation', async ({ page }) => {
    const waveformSection = page.locator('.rounded-xl').first();
    await expect(waveformSection).toBeVisible();
    
    // Check for animated waveform bars
    const waveformBars = page.locator('[class*="animate-waveform"], [style*="animation"]').first();
    await expect(waveformBars).toBeVisible();
  });

  test('features section is visible and interactive', async ({ page }) => {
    const featuresHeading = page.getByRole('heading', { name: /Everything you need for transcription/i });
    await expect(featuresHeading).toBeVisible();
    
    // Check for category tabs
    const transcriptionTab = page.getByRole('button', { name: /Transcription/i });
    await expect(transcriptionTab).toBeVisible();
    
    // Click on Export & Formats tab
    const exportTab = page.getByRole('button', { name: /Export & Formats/i });
    await exportTab.click();
    
    // Check that Export features are shown
    const multipleFormats = page.getByText(/Multiple Formats/i);
    await expect(multipleFormats).toBeVisible();
  });

  test('why different section has 4 cards', async ({ page }) => {
    const whyHeading = page.getByRole('heading', { name: /Why SpeakQuick/i });
    await expect(whyHeading).toBeVisible();
    
    // Check for all 4 differentiator cards
    const localFirstCard = page.getByText(/Local First/i);
    const speedCard = page.getByText(/Lightning Fast/i);
    const accuracyCard = page.getByText(/Incredibly Accurate/i);
    const simpleCard = page.getByText(/Dead Simple/i);
    
    await expect(localFirstCard).toBeVisible();
    await expect(speedCard).toBeVisible();
    await expect(accuracyCard).toBeVisible();
    await expect(simpleCard).toBeVisible();
  });

  test('pricing section shows both tiers', async ({ page }) => {
    const pricingHeading = page.getByRole('heading', { name: /Simple Pricing/i });
    await expect(pricingHeading).toBeVisible();
    
    const freeTrial = page.getByText(/Free Trial/i);
    const fullVersion = page.getByText(/Full Version/i);
    
    await expect(freeTrial).toBeVisible();
    await expect(fullVersion).toBeVisible();
    
    // Check for price
    const price = page.getByText(/\$49/i);
    await expect(price).toBeVisible();
  });

  test('FAQ section is expandable', async ({ page }) => {
    const faqHeading = page.getByRole('heading', { name: /Frequently Asked Questions/i });
    await expect(faqHeading).toBeVisible();
    
    // Find and click on first FAQ item
    const firstQuestion = page.getByText(/Does SpeakQuick work offline/i);
    await expect(firstQuestion).toBeVisible();
    
    await firstQuestion.click();
    
    // Check that answer is visible after click
    const answer = page.getByText(/Yes! SpeakQuick processes all audio locally/i);
    await expect(answer).toBeVisible();
  });

  test('footer has CTA and links', async ({ page }) => {
    const footerHeading = page.getByRole('heading', { name: /Ready to transform your audio/i });
    await expect(footerHeading).toBeVisible();
    
    const downloadButton = page.getByRole('button', { name: /Download for Free/i });
    await expect(downloadButton).toBeVisible();
    
    // Check for footer links
    const privacyLink = page.getByRole('link', { name: /Privacy Policy/i });
    await expect(privacyLink).toBeVisible();
  });
});
