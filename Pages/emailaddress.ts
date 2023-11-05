import {expect, type Page, type Locator} from '@playwright/test';

export class emailaddress {
    readonly page: Page;
    readonly useremailAddress: Locator;

constructor(page: Page) {
    this.page = page;
    this.useremailAddress = page.locator('#emailAddress');
}

/*Function that is called which passes the useremailaddress variable from the constructor to 
enter an email address*/
async enteremailAddress() {
    await this.useremailAddress.fill('test@test.com');
  }
}