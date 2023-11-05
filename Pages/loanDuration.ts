import {expect, type Page, type Locator} from '@playwright/test';

export class loanDuration {
    readonly page: Page;
    readonly loanDuration: Locator;

constructor(page: Page) {
    this.page = page;
    this.loanDuration = page.getByRole('button', { name: '1 year' });
}

async selectloanDuration() {
    await this.loanDuration.click();
  }

}