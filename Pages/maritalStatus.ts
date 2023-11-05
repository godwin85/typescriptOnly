import {expect, type Page, type Locator} from '@playwright/test';

export class maritalStatus {
    readonly page: Page;

constructor(page: Page) {
    this.page = page;
}

async maritalstatusUrl() {
    await expect(this.page).toHaveURL(/.*marital-status/);
  }

}