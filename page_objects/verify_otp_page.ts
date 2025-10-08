import { Page,Locator } from '@playwright/test';
import { BasePage } from './base_page';

export class VerifyOtpPage extends BasePage {
    public headingVerifyOtp: Locator;
    public textNoHp: Locator;
    constructor(page: Page) {
        super(page);
        this.headingVerifyOtp = page.getByRole('heading', { name: 'Verifikasi No. Handphone' });
        this.textNoHp = page.getByText('085232229774');
    }
}