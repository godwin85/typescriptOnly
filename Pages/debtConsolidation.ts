import {expect, type Page, type Locator} from '@playwright/test';

export class debtConsolidation {
    readonly page: Page;
    readonly debtConsolidation: Locator;

constructor(page: Page) {
    this.page = page;
    this.debtConsolidation = page.getByRole('button', { name: 'Debt consolidation' });
}

async selectdebtConsolidation() {
    await this.debtConsolidation.click();
  }

}