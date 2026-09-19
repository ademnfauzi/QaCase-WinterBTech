import { Page } from '@playwright/test';
import { LoginObject } from '../objects/loginObject';

export class LoginPage {

    constructor(private page: Page) {

    }

    async doLogin(username: string, password: string) {
        await this.page.locator(LoginObject.inputUsername).fill(username);
        await this.page.locator(LoginObject.inputPassword).fill(password);
        await this.page.locator(LoginObject.btnLogin).click();
    }
}