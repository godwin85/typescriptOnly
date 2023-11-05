import {expect, type Page, type Locator} from '@playwright/test';

export class loanUses {
    readonly page: Page;
    readonly debtConsolidation: Locator;

constructor(page: Page) {
    this.page = page;
    this.debtConsolidation = page.getByRole('button', { name: 'Debt consolidation' });
}

/*Function that is called which passes the debtConsolidation variable from the constructor to click 
on the debt consolidation option for the use of a loan*/
async selectdebtConsolidation() {
    await this.debtConsolidation.click();
  }

}