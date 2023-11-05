import {expect, type Page, type Locator} from '@playwright/test';

export class globalElements {
    readonly page: Page;
    readonly loanAmount: Locator;
    readonly continueButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.continueButton = page.getByRole('button', { name: 'Continue' })

}

async continueAction() {
    await this.continueButton.click();
  }
}