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

//Method that passes the 'userfirstname and userlastname variables to input a first and last name for a customer
async enterName() {
    await this.userfirstName.fill('Test');
    await this.userlastName.fill('Tester');
  }

}