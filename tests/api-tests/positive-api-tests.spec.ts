import { test, expect } from '@playwright/test';

//The objective of this test is to verify whether a valid mobile number is accepted at the API layer
test('Send a valid mobile number', async ({ request }) => {
    const setResponse = await request.post('https://qa-5.monevo.com/apply/about-you/mobile-number');
    data: {
        phone: "07549901068"
    }
    expect(setResponse.status()).toBe(200);
    expect(setResponse.statusText()).toBe("OK");
});