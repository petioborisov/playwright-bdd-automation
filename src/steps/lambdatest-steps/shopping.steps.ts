import {expect} from '@playwright/test';
import {Given, When, Then} from '../../fixtures/lambdatest-fixtures/LambdatestFixture';

Given('I am on the homepage', async ({page}) => {
    await page.goto('/index.php?route=common/home');
});

When('I navigate to Mega Menu and select Apple', async ({homePage}) => {
    await homePage.navigateToAppleProducts();
});

When('I add the first available product to the basket', async ({productPage}) => {
    await productPage.addFirstProductToCart();
    await productPage.verifySuccessMessage();
});

Then('I should see the product inside the shopping cart', async ({productPage, cartPage}) => {
    await productPage.navigateToCart();
    const isPresent = await cartPage.isProductInCart('');
    expect(isPresent).toBeTruthy();
});
