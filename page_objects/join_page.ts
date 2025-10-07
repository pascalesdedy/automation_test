import { Page,Locator } from '@playwright/test';
import { BasePage } from './base_page';

export class JoinPage extends BasePage {
    public textBoxNoHp: Locator;
    public textBoxEmail: Locator;
    public textBoxNamaDepan: Locator;
    public textBoxNamaBelakang: Locator;
    public buttonDaftar: Locator;
    public errorNoHpText: Locator;
    public errorInvalidEmailText: Locator;
    public errorNamaDepanNumText: Locator;
    public errorNamaBelakangNumText: Locator;
    public errorEmptyNoHpText: Locator;
    public errorEmptyEmailText: Locator;
    public errorEmptyNamaDepanText: Locator;
    public errorEmptyNamaBelakangText: Locator;
    public snkLink: Locator;
    public kbLink: Locator;
    constructor(page: Page) {
        super(page);    
        this.textBoxNoHp = page.getByRole('textbox', { name: 'No. Handphone' });
        this.textBoxEmail = page.getByRole('textbox', { name: 'Email' });
        this.textBoxNamaDepan = page.getByRole('textbox', { name: 'Nama Depan' });
        this.textBoxNamaBelakang = page.getByRole('textbox', { name: 'Nama Belakang' });
        this.buttonDaftar = page.getByRole('button', { name: 'Daftar' });
        this.snkLink = page.getByText('Syarat dan Ketentuan');
        this.kbLink = page.getByText('Kebijakan Privasi');
        //error message invalid value
        this.errorNoHpText = page.getByText('Format No. Handphone tidak valid');
        this.errorInvalidEmailText = page.getByText('Format email tidak valid');
        this.errorNamaDepanNumText = page.getByText('Input harus berupa huruf');
        this.errorNamaBelakangNumText = page.getByText('Input harus berupa huruf');
        //error message empty value
        this.errorEmptyNoHpText = page.getByText('Input wajib diisi');
        this.errorEmptyEmailText = page.getByText('Input wajib diisi');
        this.errorEmptyNamaDepanText = page.getByText('Input wajib diisi');
        this.errorEmptyNamaBelakangText = page.getByText('Input wajib diisi');
    }
}
