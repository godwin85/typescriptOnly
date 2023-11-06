import { test, expect } from '@playwright/test';

//Imported pages containing page objects and methods covering various actions performed with these via the UI
import { borrowloanAmount} from '../../Pages/borrowloanAmount';
import { loanDuration} from '../../Pages/loanDuration';
import { loanUses } from '../../Pages/loanUses';
import { endUserTitle } from '../../Pages/endUserTitle';
import { userName } from '../../Pages/userName';
import { dateofBirth } from '../../Pages/dateofBirth';
import { emailaddress } from '../../Pages/emailaddress';
import { mobilephoneNumber } from '../../Pages/mobilephoneNumber';
import { globalElements } from '../../Pages/globalElements';

  
  test('Enter invalid mobile phone number via the UI', async ({ page }) =>
  {
 
    //Const variables that are passed to reference an imported page before specifying an action with a page object
    const globalelementsPage = new globalElements(page);
    const loanamountPage = new borrowloanAmount(page);
    const loandurationPage = new loanDuration(page);
    const loanusagePage = new loanUses(page);
    const titlePage = new endUserTitle(page);
    const usernamePage = new userName(page);
    const dateofbirthPage = new dateofBirth(page);  
    const emailaddressPage = new emailaddress(page);
    const mobilenumberPage = new mobilephoneNumber(page);
  
  
    //Opens the base URL
    await page.goto("/apply");
  
    //Performs the customer action to specify a loan amount
    await loanamountPage.inputloanAmount();
  
    //Performs the customer action to progress to the Loan Duration screen
    await globalelementsPage.continueAction();
  
    //Performs the action to select a duration. In this case 1 year
    await loandurationPage.selectloanDuration();
  
    //Performs the action to select a debt consolidation option
    await loanusagePage.selectdebtConsolidation();
  
    //Performs the action to select a title. In this case 'Mr'
    await titlePage.selectTitle();
  
    //Peforms the action to enter both the customer first and last names
    await usernamePage.enterName(); 
  
    //Performs the action to continue to the Date of Birth screen
    await globalelementsPage.continueAction();
  
    //Performs the action to enter a date of birth
    await dateofbirthPage.enterdateofBirth();
  
    //Performs the action to continue to the email address screen
    await globalelementsPage.continueAction();
  
    //Performs the action to enter an email address
    await emailaddressPage.enteremailAddress();
  
    //Performs the action to continue to the mobile number screen
    await globalelementsPage.continueAction();
  
    //Performs the action to enter an invalid mobile number 
    await mobilenumberPage.enterinvalidmobileNumber() 
   
  
    //Performs the action to attempt to progress to the Marital Status screen
    await globalelementsPage.continueAction();
  
    //Assertion to check whether the URL of the mobile phone number screen is displayed to partly confirm validation was not successful
    await expect(page).toHaveURL(/.*mobile-number/);
  
    //Assertion to check if the expected error message is displayed to confirm validation was not successful
    const element = await page.getByText('Enter a valid UK mobile phone number');
    await expect(element !== undefined ).toBeTruthy();
  
  })
  
  