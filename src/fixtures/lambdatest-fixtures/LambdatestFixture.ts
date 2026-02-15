import {test as base, createBdd} from 'playwright-bdd';
import {LoginPage} from '../../pages/lambdatest-pages/LoginPage';
import {HomePage} from '../../pages/lambdatest-pages/HomePage';
import {ProductPage} from '../../pages/lambdatest-pages/ProductPage';
import {CartPage} from '../../pages/lambdatest-pages/CartPage';

type MyFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    productPage: ProductPage;
    cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({page}, use) => {
        await use(new HomePage(page));
    },
    productPage: async ({page}, use) => {
        await use(new ProductPage(page));
    },
    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },
});

export const {Given, When, Then} = createBdd(test);
