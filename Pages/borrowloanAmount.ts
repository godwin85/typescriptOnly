import {expect, type Page, type Locator} from '@playwright/test';

export class borrowloanAmount {
    readonly page: Page;
    readonly loanAmount: Locator;
    readonly continueButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.loanAmount = page.getByPlaceholder('£1,000 to £50,000');
    this.continueButton = page.getByRole('button', { name: 'Continue' })

}

async inputloanAmount() {
    await this.loanAmount.click();
    await this.loanAmount.fill('1000');
  }

async continueAction() {
    await this.continueButton.click();
  }
}