// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    testDir: './tests',

    /* Run tests in parallel */
    fullyParallel: true,

    /* Fail if test.only is left in code */
    forbidOnly: !!process.env.CI,

    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,

    /* Workers */
    workers: process.env.CI ? 1 : undefined,

    /* Reporter */
    reporter: 'html',

    /* Shared settings */
    use: {
        baseURL: 'https://www.automationanywhere.com',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry'
    },

    /* Browser projects */
    projects: [{
            name: 'chromium',
            use: {...devices['Desktop Chrome'] }
        },
        {
            name: 'firefox',
            use: {...devices['Desktop Firefox'] }
        },
        {
            name: 'webkit',
            use: {...devices['Desktop Safari'] }
        }
    ]
});