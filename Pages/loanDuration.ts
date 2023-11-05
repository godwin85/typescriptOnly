import {expect, type Page, type Locator} from '@playwright/test';

export class loanDuration {
    readonly page: Page;
    readonly loanDuration: Locator;

constructor(page: Page) {
    this.page = page;
    this.loanDuration = page.getByRole('button', { name: '1 year' });
}

/*Function that is called which passes the loanDuration variable from the constructor to click 
on the the 1 year option for a loan duration*/
async selectloanDuration() {
    await this.loanDuration.click();
  }

}