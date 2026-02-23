import { test, expect } from '@playwright/test';

test.describe('SpeakQuick Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/SpeakQuick/);
  });

  test('hero section is visible', async ({ page }) => {
    const heroHeading = page.locator('h1');
    await expect(heroHeading).toContainText(/Turn Audio Into/i);
    await expect(heroHeading).toContainText(/Accurate Text/i);
    
    const downloadLink = page.getByRole('link', { name: /Download for macOS/i });
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute(
      'href',
      /github\.com\/JosiMou\/SpeakQuick\/releases\/latest\/download\/SpeakQuick\.dmg/
    );
  });

  test('hero has waveform animation', async ({ page }) => {
    const waveformSection = page.locator('.rounded-xl').first();
    await expect(waveformSection).toBeVisible();
    
    // Check for animated waveform bars
    const waveformBars = page.locator('[class*="animate-waveform"], [style*="animation"]').first();
    await expect(waveformBars).toBeVisible();
  });

  test('features section is visible and interactive', async ({ page }) => {
    // Check for the main features section by looking for feature-related headings or elements
    const featuresSection = page.locator('section').filter({ has: page.locator('h2') });
    await expect(featuresSection.first()).toBeVisible();
    
    // Check for category tabs (buttons with numbers indicating feature counts)
    const categoryTabs = page.getByRole('button').filter({ hasText: /\d/ });
    await expect(categoryTabs.first()).toBeVisible();
    
    // Verify we can interact with tabs
    const tabCount = await categoryTabs.count();
    expect(tabCount).toBeGreaterThan(0);
  });

  test('why different section has 4 cards', async ({ page }) => {
    const whyHeading = page.getByRole('heading', { name: /Why SpeakQuick/i });
    await expect(whyHeading).toBeVisible();
    
    // Check for all 4 differentiator cards (use headings to avoid matching demo text)
    const localFirstCard = page.getByRole('heading', { name: /Local First/i });
    const speedCard = page.getByRole('heading', { name: /Lightning Fast/i });
    const accuracyCard = page.getByRole('heading', { name: /Incredibly Accurate/i });
    const simpleCard = page.getByRole('heading', { name: /Dead Simple/i });
    
    await expect(localFirstCard).toBeVisible();
    await expect(speedCard).toBeVisible();
    await expect(accuracyCard).toBeVisible();
    await expect(simpleCard).toBeVisible();
  });

  test('pricing section shows both tiers', async ({ page }) => {
    const pricingHeading = page.getByRole('heading', { name: /Simple Pricing/i });
    await expect(pricingHeading).toBeVisible();
    
    const freeTrial = page.getByRole('heading', { name: /Free Trial/i });
    const fullVersion = page.getByRole('heading', { name: /Full Version/i });
    
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
    
    const downloadLink = page.getByRole('link', { name: /Download for Free/i });
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute(
      'href',
      /github\.com\/JosiMou\/SpeakQuick\/releases\/latest\/download\/SpeakQuick\.dmg/
    );
    
    // Check for footer links
    const privacyLink = page.getByRole('link', { name: /Privacy Policy/i });
    await expect(privacyLink).toBeVisible();
  });
});
