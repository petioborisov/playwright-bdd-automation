import { Page, Locator } from '@playwright/test';
import { BasePage } from '../BasePage';

export class ProductPage extends BasePage {
    private readonly firstProduct: Locator;
    private readonly addToCartOverlayButton: Locator;
    private readonly successMessage: Locator;
    private readonly cartButton: Locator;
    private readonly viewCartLink: Locator;

    constructor(page: Page) {
        super(page);
        this.firstProduct = page.locator("(//img[@class='lazy-load'])[1]");
        this.addToCartOverlayButton = page.locator("(//button[contains(@class,'btn btn-cart')])[1]");
        this.successMessage = page.locator("//*[@class='toast-body']");
        this.cartButton = page.locator('#entry_217825').locator('.cart-icon');
        this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
    }

    async addFirstProductToCart() {
        await this.firstProduct.hover();
        await this.addToCartOverlayButton.click();
    }

    async verifySuccessMessage() {
        await this.successMessage.waitFor({ state: 'visible' });
    }

    async navigateToCart() {
        if (await this.viewCartLink.isVisible()) {
            await this.viewCartLink.click();
        } else {
            await this.navigate('/index.php?route=checkout/cart');
        }
    }
}
