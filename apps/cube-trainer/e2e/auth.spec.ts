import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import { mockTest } from './mock-test';

import { deleteUser } from './supabase-client';

test.describe('auth', () => {
  test('should allow users to sign up', async ({ page }) => {
    const email = faker.internet.email();
    await page.goto('/');
    await page
      .getByRole('link', { name: "Don't have an account? Sign up" })
      .first()
      .click();
    await page.getByPlaceholder('Your email address').click();
    await page.getByPlaceholder('Your email address').fill(email);
    await page.getByPlaceholder('Your email address').press('Tab');
    await page.getByPlaceholder('Your password').fill('password');
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect(page).toHaveURL('/page/Inbox');
    await deleteUser(email);
  });

  test('should not allow two users with the same email to be registered', async ({
    page,
  }) => {
    const email = faker.internet.email();
    await page.goto('/');
    await page
      .getByText(/sign up/i)
      .first()
      .click();
    await page.getByPlaceholder(/your email address/i).fill(email);
    await page.getByPlaceholder(/your password/i).fill('password');
    await page.getByText(/sign up/i).click();
    await expect(page).toHaveURL('/page/Inbox');
    await page.context().clearCookies();
    await page.evaluate(() => window.localStorage.clear());
    await page.goto('/auth');
    await page.getByText(/sign up/i).click();
    await page.getByPlaceholder(/your email address/i).type(email);
    await page.getByPlaceholder(/your password/i).type('password');
    await page.getByText(/sign up/i).click();
    await expect(page.getByText(/User already registered/i)).toBeVisible();
    await deleteUser(email);
  });

  test('should show an error if a user attempts to log in with invalid credentials', async ({
    page,
  }) => {
    const email = faker.internet.email();
    const password = faker.internet.password();
    await page.goto('/');
    await page.getByPlaceholder(/your email address/i).fill(email);
    await page.getByPlaceholder(/your password/i).fill(password);
    await page.getByText(/sign in/i).click();
    await expect(page.getByText(/Invalid login credentials/i)).toBeVisible();
  });

  mockTest('should mock signup API', async ({ page }) => {
    const email = faker.internet.email();
    await page.goto('/');
    await page
      .getByRole('link', { name: "Don't have an account? Sign up" })
      .first()
      .click();
    await page.getByPlaceholder('Your email address').click();
    await page.getByPlaceholder('Your email address').fill(email);
    await page.getByPlaceholder('Your email address').press('Tab');
    await page.getByPlaceholder('Your password').fill('password');
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect(page).toHaveURL('/page/Inbox');
  });
});
