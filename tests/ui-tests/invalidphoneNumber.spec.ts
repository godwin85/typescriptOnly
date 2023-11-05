import { test, expect } from '@playwright/test';
import { borrowloanAmount} from '../../Pages/borrowloanAmount';
import { loanDuration} from '../../Pages/loanDuration';
import { debtConsolidation } from '../../Pages/debtConsolidation';
import { endUserTitle } from '../../Pages/endUserTitle';
import { userName } from '../../Pages/userName';
import { dateofBirth } from '../../Pages/dateofBirth';
import { emailaddress } from '../../Pages/emailaddress';
import { mobilephoneNumber } from '../../Pages/mobilephoneNumber';
import { globalElements } from '../../Pages/globalElements';


test('Enter invalid mobile phone number via the UI', async ({ page }) =>
{
  const globalelementsPage = new globalElements(page);
  const loanamountPage = new borrowloanAmount(page);
  const loandurationPage = new loanDuration(page);
  const debtconsolidationPage = new debtConsolidation(page);
  const titlePage = new endUserTitle(page);
  const usernamePage = new userName(page);
  const dateofbirthPage = new dateofBirth(page);
  const emailaddressPage = new emailaddress(page);
  const mobilenumberPage = new mobilephoneNumber(page);


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
  await mobilenumberPage.enterinvalidmobileNumber();
  await globalelementsPage.continueAction();

  //Assertion to check whether the URL of the mobile phone number screen is displayed 
  await expect(page).toHaveURL(/.*mobile-number/);

  //Assertion to check if the expected error message is displayed
  const element = await page.getByText('Enter a valid UK mobile phone number');
  await expect(element !== undefined ).toBeTruthy();

})

