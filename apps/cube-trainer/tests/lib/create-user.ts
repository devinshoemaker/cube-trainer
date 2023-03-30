import { faker } from '@faker-js/faker';
import { expect, Page } from '@playwright/test';

const createUser = async (page: Page) => {
  const email = faker.internet.email();
  await page.goto('/auth');
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
};

export default createUser;
