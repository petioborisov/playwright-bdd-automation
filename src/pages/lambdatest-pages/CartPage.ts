import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../BasePage';

export class CartPage extends BasePage {
    private readonly tableRows: Locator;

    constructor(page: Page) {
        super(page);
        this.tableRows = page.locator('#content form table tbody tr');
    }

    async isProductInCart(productPartialName: string) {
        await this.tableRows.waitFor({ state: 'visible' });
        const product = this.tableRows.filter({ hasText: productPartialName });
        return await product.count() > 0;
    }
}
