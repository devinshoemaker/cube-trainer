import test, { expect } from '@playwright/test';

import createUser from './lib/create-user';
import { mockTest } from './lib/mock-test';

test.describe('timer', () => {
  mockTest('should start the timer with the spacebar', async ({ page }) => {
    await createUser(page);
    await page.goto('/timer');
    await expect(page.getByText('00:00:00')).toBeVisible();
    await page.keyboard.press('Space');
    await page.waitForTimeout(100);
    await page.keyboard.press('Space');
    await expect(page.getByTestId('timer')).not.toContainText('00:00:00');
  });

  mockTest(
    'should start the timer by clicking the screen',
    async ({ page }) => {
      await createUser(page);
      await page.goto('/timer');
      await page.getByText('00:00:00').click();
      await page.waitForTimeout(100);
      await page.getByTestId('timer').click();
      await expect(page.getByTestId('timer')).not.toContainText('00:00:00');
    }
  );
});
