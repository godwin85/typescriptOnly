import {expect, type Page, type Locator} from '@playwright/test';

export class borrowloanAmount {
    readonly page: Page;
    readonly loanAmount: Locator;
    readonly continueButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.loanAmount = page.getByPlaceholder('£1,000 to £50,000');

}

/*Function that is called which passes the loanAmount variable from the constructor to click 
into the loan amount field and populate it with the value of 1000*/
async inputloanAmount() {
    await this.loanAmount.click();
    await this.loanAmount.fill('1000');
  }

}
