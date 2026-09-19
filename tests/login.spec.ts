import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('login with valid admin account', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('/');

    await loginPage.doLogin(
        'admin@example.com',
        'your-password'
    );

    await expect(page).toHaveURL(/dashboard/);
});