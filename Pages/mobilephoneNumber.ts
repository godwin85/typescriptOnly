import {expect, type Page, type Locator} from '@playwright/test';

export class mobilephoneNumber {
    readonly page: Page;
    readonly mobileNumber: Locator;

constructor(page: Page) {
    this.page = page;
    this.mobileNumber = page.locator('#mobileNumber');
}

//All methods below pass the mobileNumber variable as part of the action to input an invalid number
async entervalidmobileNumber() {
    await this.mobileNumber.fill('07549583726');
  }

  async enterinvalidmobileNumber() {
    await this.mobileNumber.fill('0161-223-2232');
  }

async checkinitialmobileNumber(){
    await expect(this.mobileNumber).toHaveValue('07549583726');
}

async enterupdatedmobileNumber() {
    await this.mobileNumber.fill('07549583728');
  }

async checkupdatedmobileNumber(){
    await expect(this.mobileNumber).toHaveValue('07546787678');
}

}