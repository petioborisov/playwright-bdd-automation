import {expect} from '@playwright/test';
import {Given, When, Then} from '../../fixtures/lambdatest-fixtures/LambdatestFixture';

Given('I am on the login page', async ({loginPage}) => {
    await loginPage.navigateToLogin();
});

When('I login with email {string} and password {string}', async ({loginPage}, email, password) => {
    await loginPage.login(email, password);
});

Then('I should be logged in successfully', async ({page}) => {
    await expect(page).toHaveURL(/.*route=account\/account/);
});

Then('I should see an error message', async ({ loginPage }) => {
    const actualText = await loginPage.getErrorMessage();

    const validMessages = [
        "Warning: No match for E-Mail Address and/or Password.",
        "Warning: Your account has exceeded allowed number of login attempts"
    ];

    const isValid = validMessages.some(msg => actualText?.includes(msg));
    expect(isValid).toBeTruthy();
});
