import { test } from '@playwright/test';

test('verify all routes and responsiveness', async ({ page }) => {
  // Array of routes to verify
  const routes = [
    { name: 'landing', path: '/' },
    { name: 'feed', path: '/feed' },
    { name: 'deals', path: '/deals' },
    { name: 'services', path: '/services' },
    { name: 'contact', path: '/contact' }
  ];

  const viewports = [
    { name: 'desktop', width: 1280, height: 800 },
    { name: 'mobile', width: 375, height: 667 }
  ];

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });

    for (const route of routes) {
      await page.goto(`http://localhost:5173${route.path}`);
      // Wait for some content to load
      await page.waitForTimeout(1000);
      await page.screenshot({
        path: `verify_${viewport.name}_${route.name}.png`,
        fullPage: true
      });
    }
  }
});
