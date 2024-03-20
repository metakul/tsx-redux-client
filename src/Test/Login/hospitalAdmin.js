// Import puppeteer
import puppeteer from 'puppeteer';
const HospitalAdmin = {
  userName: 'H0001',
  password: 'Anurag@123',
  otp: Math.floor(100000 + Math.random() * 900000).toString() // Generate random OTP
};

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 12,
    // devtools:true
    defaultViewport: null,

  });
  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto('http://localhost:3000/');

  const title = await page.title();
  console.log("title", title);

  const element = await page.waitForSelector('.HOSPITAL_ADMIN');
  console.log(element)

  await element.click();

  await page.click('.loginUsername');
  await page.type('.loginUsername', HospitalAdmin.userName);

  await page.click('.loginPassword');
  await page.type('.loginPassword', HospitalAdmin.password);

  // Click on the submit button to send OTP
  await page.click('.loginButton');

  // Wait for OTP field to appear
  await page.waitForSelector('.otpFiller');

  await page.type('.otpFiller', HospitalAdmin.otp);

  // Click on the verify OTP button
  await page.click('.verifyOtpButton');
  // Wait for navigation to complete to the dashboard
  await page.waitForNavigation();

  // You can further interact with the dashboard page here
  await page.waitForSelector('.updateOrgAdminButton');
  await page.click('.updateOrgAdminButton');
  // Click on the "Approve" menu item
  await page.click('MenuItem:nth-child(2)');

})();
