import {expect, type Page, type Locator} from '@playwright/test';

export class userName {
    readonly page: Page;
    readonly userfirstName: Locator;
    readonly userlastName: Locator;

constructor(page: Page) {
    this.page = page;
    this.userfirstName = page.locator('#firstName');
    this.userlastName = page.locator('#lastName');
}

async enterName() {
    await this.userfirstName.fill('Test');
    await this.userlastName.fill('Tester');
  }

}