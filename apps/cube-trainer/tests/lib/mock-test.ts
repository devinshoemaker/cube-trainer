import { test as base, expect } from '@playwright/test';
import type { MockServiceWorker } from 'playwright-msw';
import { createWorkerFixture } from 'playwright-msw';

import handlers from '../../mocks/handlers';

const mockTest = base.extend<{
  worker: MockServiceWorker;
}>({
  worker: createWorkerFixture(handlers),
});

export { mockTest, expect };
