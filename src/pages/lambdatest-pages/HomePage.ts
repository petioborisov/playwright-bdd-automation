import { Page, Locator } from '@playwright/test';
import { BasePage } from '../BasePage';

export class HomePage extends BasePage {
    private readonly megaMenu: Locator;
    private readonly appleLink: Locator;

    constructor(page: Page) {
        super(page);
        this.megaMenu = page.getByRole('button', { name: 'Mega Menu' });
        this.appleLink = page.getByRole('link', { name: 'Apple', exact: true });
    }

    async navigateToAppleProducts() {
        await this.megaMenu.hover();
        await this.appleLink.waitFor({ state: 'visible' });
        await this.appleLink.click();
    }
}
