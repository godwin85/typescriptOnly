import {expect, type Page, type Locator} from '@playwright/test';

export class endUserTitle {
    readonly page: Page;
    readonly userTitle: Locator;

constructor(page: Page) {
    this.page = page;
    this.userTitle = page.getByRole('button', { name: 'Mr', exact: true });
}

/*Function that is called which passes the userTitle variable from the constructor to click 
on the Mr title option*/
async selectTitle() {
    await this.userTitle.click();
  }

}