// import { expect, test } from '@playwright/test';

// import createUser from './lib/create-user';
// import { mockTest } from './lib/mock-test';

// test.describe('OLL list', () => {
//   mockTest('should navigate to OLL list from side menu', async ({ page }) => {
//     await createUser(page);
//     await page.getByText(/OLL List/i).click();
//     await expect(page).toHaveURL('/oll-list');
//     await expect(
//       page.getByRole('link', {
//         name: "1 Dot R U2 R2 F R F' U2 R' F R F' 3",
//         includeHidden: false,
//       })
//     ).toBeVisible();
//     page
//       .getByRole('link', {
//         name: "1 Dot R U2 R2 F R F' U2 R' F R F' 3",
//         includeHidden: false,
//       })
//       .click();
//     await expect(page.getByTestId('oll-timer')).toBeVisible();
//   });
// });

import { test } from '@playwright/test';

test.describe('OLL list', () => null);
