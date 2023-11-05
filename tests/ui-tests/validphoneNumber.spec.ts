import { test, expect } from '@playwright/test';
import { borrowloanAmount} from '../../Pages/borrowloanAmount';
import { loanDuration} from '../../Pages/loanDuration';
import { debtConsolidation } from '../../Pages/debtConsolidation';
import { endUserTitle } from '../../Pages/endUserTitle';
import { userName } from '../../Pages/userName';
import { dateofBirth } from '../../Pages/dateofBirth';
import { emailaddress } from '../../Pages/emailaddress';
import { mobilephoneNumber } from '../../Pages/mobilephoneNumber';
import { maritalStatus } from '../../Pages/maritalStatus';
import { globalElements } from '../../Pages/globalElements';

test('Enter a valid mobile number', async ({ page }) => {
  const globalelementsPage = new globalElements(page);
  const loanamountPage = new borrowloanAmount(page);
  const loandurationPage = new loanDuration(page);
  const debtconsolidationPage = new debtConsolidation(page);
  const titlePage = new endUserTitle(page);
  const usernamePage = new userName(page);
  const dateofbirthPage = new dateofBirth(page);
  const emailaddressPage = new emailaddress(page);
  const mobilenumberPage = new mobilephoneNumber(page);
  const maritalstatusPage = new maritalStatus(page);


  await page.goto("/apply");
  await loanamountPage.inputloanAmount();
  await globalelementsPage.continueAction();
  await loandurationPage.selectloanDuration();
  await debtconsolidationPage.selectdebtConsolidation();
  await titlePage.selectTitle();
  await usernamePage.enterName(); 
  await globalelementsPage.continueAction();
  await dateofbirthPage.enterdateofBirth();
  await globalelementsPage.continueAction();
  await emailaddressPage.enteremailAddress();
  await globalelementsPage.continueAction();
  await mobilenumberPage.entervalidmobileNumber();
  await globalelementsPage.continueAction();

  //Assertion to check whether the URL of the marital status screen is displayed 
  await maritalstatusPage.maritalstatusUrl;
  
  //Assertion to check whether the correct mobile number is displayed on the mobile number entry screen
  await page.getByText('back').click();
  await mobilenumberPage.checkinitialmobileNumber;

//User enters an alternative mobile number
  await page.locator('#mobileNumber').clear();
  await mobilenumberPage.enterupdatedmobileNumber;
  await globalelementsPage.continueAction();

//Assertion to check whether the URL of the marital status screen is displayed 
await maritalstatusPage.maritalstatusUrl;

//Assertion to check whether the correct mobile number is displayed on the mobile number entry screen
await page.getByText('back').click();
await mobilenumberPage.checkupdatedmobileNumber;
});