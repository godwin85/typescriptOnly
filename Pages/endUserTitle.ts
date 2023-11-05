import {expect, type Page, type Locator} from '@playwright/test';

export class endUserTitle {
    readonly page: Page;
    readonly userTitle: Locator;

constructor(page: Page) {
    this.page = page;
    this.userTitle = page.getByRole('button', { name: 'Mr', exact: true });
}

async selectTitle() {
    await this.userTitle.click();
  }

}