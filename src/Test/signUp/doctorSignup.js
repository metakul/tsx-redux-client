/* eslint-disable no-undef */
import puppeteer from 'puppeteer';

(async () => {
    let brahmaId;
    let hospitalId;
    let mobileNo;
    let mailId

    process.argv.forEach((arg) => {
        if (arg.startsWith('brahmaId:')) {
            brahmaId = arg.split(':')[1];
        }
        if (arg.startsWith('hospitalId:')) {
            hospitalId = arg.split(':')[1];
        }
        if (arg.startsWith('mobileNo:')) {
          mobileNo = arg.split(':')[1];
        }
        if (arg.startsWith('mailId:')) {
          mailId = arg.split(':')[1];
        }
    });
  
    if (!brahmaId) {
        console.error('Brahma ID not provided.');
        process.exit(1);
    }
    if (!hospitalId) {
        console.error('Hospital ID not provided.');
        process.exit(1);
    }
    if (!mobileNo) {
        console.error('Mobile No not provided.');
        process.exit(1);
    }
    if (!mailId) {
        console.error('Mail ID not provided.');
        process.exit(1);
    }

    console.log("Brahma ID:", brahmaId);
    console.log("Hospital ID:", hospitalId);

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 5,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto('http://localhost:3000/doctor/signup');


    await page.type('#brahmaId', brahmaId);
    await page.type('#mobileNo', mobileNo);
    await page.type('#mailId', mailId);
    await page.type('#department', "ENT");
    await page.type('#password-signup', 'Anurag@123');

    await page.type('#confirmPassword', 'Anurag@123');
    // await page.type('#hospitalId', hospitalId);
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
