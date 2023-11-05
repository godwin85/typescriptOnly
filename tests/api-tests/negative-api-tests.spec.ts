import { test, expect } from '@playwright/test';

//The objective of this test is to verify whether a mobile number that is less than the 11 character limit is rejected at the API layer
test('Enter an invalid mobile number which is < 11 digits', async ({ request }) => {
    const setResponse = await request.post('https://qa-5.monevo.com/apply/about-you/mobile-number');
    data: {
        phone: "0754990106"
    }
    expect(setResponse.status()).toBe(400);
});

//The objective of this test is to verify whether a mobile number that exceeds the 11 character limit is rejected at the API layer
test('Enter an invalid mobile number which is > 11 digits', async ({ request }) => {
    const setResponse = await request.post('https://qa-5.monevo.com/apply/about-you/mobile-number');
    data: {
        phone: "075499010688"
    }
    expect(setResponse.status()).toBe(400);
});

//The objective of this test is to verify whether a mobile number containing hyphens limit is rejected at the API layer
test('Enter a hiphenated mobile phone number', async ({ request }) => {
    const setResponse = await request.post('https://qa-5.monevo.com/apply/about-you/mobile-number');
    data: {
        phone: "0754-999-1020"
    }
    expect(setResponse.status()).toBe(400);
});

//The objective of this test is to verify whether an empty mobile number value is rejected at the API layer
test('Enter an empty mobile phone number', async ({ request }) => {
    const setResponse = await request.post('https://qa-5.monevo.com/apply/about-you/mobile-number');
    data: {
        phone: ""
    }
    expect(setResponse.status()).toBe(400);
});

//The objective of this test is to verify whether a mobile number for which the second digit is 8 and not 7 is rejected at the API layer
test('Enter an invalid mobile number for which the second digit is 8 and not 7', async ({ request }) => {
    const setResponse = await request.post('https://qa-5.monevo.com/apply/about-you/mobile-number');
    data: {
        phone: "07549901068"
    }
    expect(setResponse.status()).toBe(400);
});
