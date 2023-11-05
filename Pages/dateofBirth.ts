import {expect, type Page, type Locator} from '@playwright/test';

export class dateofBirth {
    readonly page: Page;
    readonly dateofBirth: Locator;

constructor(page: Page) {
    this.page = page;
    this.dateofBirth = page.locator('#dateOfBirth');
}

async enterdateofBirth() {
    await this.dateofBirth.fill('14/02/2000');
  }

}