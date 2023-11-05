import { test, expect } from '@playwright/test';

//The objective of this test is to verify whether a valid mobile number is accepted at the API layer
test('Enter valid mobile number', async ({ request }) => {
    const setResponse = await request.post('https://qa-5.monevo.com/apply/about-you/mobile-number');
    data: {
        phone: "07549901068"
    }
    expect(setResponse.ok()).toBeTruthy;
    expect(setResponse.status()).toBe(200);
    expect(setResponse.statusText()).toBe("OK");
});