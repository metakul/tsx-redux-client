import puppeteer from 'puppeteer';

// Function to generate random phone number
function generateRandomPhone() {
    const randomNumber = Math.floor(Math.random() * 1000000000); // Generates a 9-digit random number
    return `9${randomNumber.toString().padStart(9, '0')}`; // Ensures exactly 10 digits starting with '9'
}

function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(7);
    return `user${randomString}@gmail.com`;
}

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 2,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto('http://localhost:3000/doctor/signup');

    await page.click('.yes-button');

    await page.type('#brahmaId', 'B00001');
    await page.type('#mobileNo', generateRandomPhone());
    await page.type('#mailId', generateRandomEmail());
    await page.type('#department', "ENT");
    await page.type('#password-signup', 'Anurag@123');

    await page.type('#confirmPassword', 'Anurag@123');
    await page.type('#orgName', 'org1');
    await page.type('#hospitalId', 'H0001');
    await page.type('#appointment', 'appointment');

    await page.click('.handleNext')

    const otpVerificationSelector = '.verifyByEmail input[type="radio"]';
    await page.waitForSelector(otpVerificationSelector, { visible: true });

    // Click on the ORGANISATION radio button
    await page.click(otpVerificationSelector);
    await page.click('button[type="submit"]');

    // Wait for OTP field to appear
    await page.waitForSelector('.otpFiller');

    await page.type('.otpFiller', "124557");

    // Click on the verify OTP button
    await page.click('.verifyOtpButton');

})();
