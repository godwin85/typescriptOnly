import {expect, type Page, type Locator} from '@playwright/test';

export class dateofBirth {
    readonly page: Page;
    readonly dateofBirth: Locator;

constructor(page: Page) {
    this.page = page;
    this.dateofBirth = page.locator('#dateOfBirth');
}

/*Method that is called which passes the dateofBirth variable from the constructor to click 
into the date of birth field and populate it with the value of 14/02/2000*/
async enterdateofBirth() {
    await this.dateofBirth.fill('14/02/2000');
  }

}