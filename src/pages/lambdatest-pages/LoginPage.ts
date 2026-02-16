import {Page, Locator, expect} from '@playwright/test';
import {BasePage} from '../BasePage';

export class LoginPage extends BasePage {
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly alertMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.locator('#input-email');
        this.passwordInput = page.locator('#input-password');
        this.loginButton = page.locator('input[value="Login"]');
        this.alertMessage = page.locator('.alert-danger');
    }

    async navigateToLogin() {
        await this.navigate('/index.php?route=account/login');
    }

    async login(email: string, pass: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.alertMessage.textContent();
    }
}
