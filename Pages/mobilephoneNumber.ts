import {expect, type Page, type Locator} from '@playwright/test';

export class mobilephoneNumber {
    readonly page: Page;
    readonly mobileNumber: Locator;

constructor(page: Page) {
    this.page = page;
    this.mobileNumber = page.locator('#mobileNumber');
}


//Method called to enter a valid mobile phone number to test form validation
async entervalidmobileNumber() {
  await this.mobileNumber.fill('07897641544');
}

//Method called to enter an invalid phone number to form validation
async enterinvalidmobileNumber() {
  await this.mobileNumber.fill('310-323-258');
}

//Method called to check whether a specified mobile number has been saved 
async checkmobileNumber(){
    await expect(this.mobileNumber).toHaveValue('07897641544');
}

}