import {expect, type Page, type Locator} from '@playwright/test';

export class maritalStatus {
    readonly page: Page;

constructor(page: Page) {
    this.page = page;
}

/*Method that utilises the 'page' variable as part of an assertion to check if the Marital Status 
screen is displayed*/
async maritalstatusUrl() {
    await expect(this.page).toHaveURL(/.*marital-status/);
  }

}