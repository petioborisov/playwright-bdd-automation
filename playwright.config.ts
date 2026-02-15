import {defineConfig, devices} from '@playwright/test';
import {defineBddConfig} from 'playwright-bdd';

const testDir = defineBddConfig({
    features: 'features/lambdatest-features/*.feature',
    steps: 'src/steps/lambdatest-steps/*.ts',
    importTestFrom: 'src/fixtures/lambdatest-fixtures/LambdatestFixture.ts',
});

export default defineConfig({
    testDir,
    reporter: 'html',
    fullyParallel: true,
    use: {
        baseURL: 'https://ecommerce-playground.lambdatest.io',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        headless: false,
        viewport: {width: 1280, height: 720},
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },
    ],
});
