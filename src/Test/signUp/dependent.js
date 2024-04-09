/* eslint-disable no-undef */
import puppeteer from 'puppeteer';
import { faker } from '@faker-js/faker';


function generateRandomPhone() {
  const randomNumber = Math.floor(Math.random() * 1000000000); // Generates a 9-digit random number
  return `9${randomNumber.toString().padStart(9, '0')}`; // Ensures exactly 10 digits starting with '9'
}

function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(7);
  return `user${randomString}@gmail.com`;
}

export function createRandomUser() {
  return {
    orgName: 'org1',
    sex: 'MALE', 
    registeredHospital: 'H0001', 
    fullName: faker.internet.userName(),
    age: faker.datatype.number({ min: 18, max: 100 }),
    dependentBrahmaId: '', // Will be filled later
    mailId: generateRandomEmail(),
    mobileNo: generateRandomPhone(),
  };
}


(async () => {
  let brahmaId;
  process.argv.forEach((arg) => {
    if (arg.startsWith('brahmaId:')) {
      brahmaId = arg.split(':')[1];
    }
  });

  if (!brahmaId) {
    console.error('Brahma ID not provided.');
    process.exit(1);
  }
  console.log(brahmaId);

  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 2,
    defaultViewport: null
  });

  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto('http://localhost:3000/applicant/signup');

  const title = await page.title();
  console.log(title);

  // input file:
  const dropZone = await page.waitForFunction('document.querySelector(".dropzone")');
  console.log(dropZone);

  const randomImageIndex = Math.floor(Math.random() * 4) + 1;
  const fileName = `${randomImageIndex}.png`; 

  const filePath = `src/Test/signUp/images/${fileName}`; 

  // Find the input element for file upload
  const inputUploadHandle = await page.$('input[type=file]');

  // Upload the file
  await inputUploadHandle.uploadFile(filePath);

  // Create a random user object
  const randomUser = createRandomUser();

  // Fill form fields with random user data
  await page.type('input[name="fullName"]', randomUser.fullName);
  await page.click(`input[name="row-radio-buttons-group"][value="${randomUser.sex.toUpperCase()}"]`);
    // Select dependent On
  await page.click(`input[name="row-radio-buttons-group-dependentOn"][value="husband-wife"]`);
  await page.type('input[name="age"]', randomUser.age.toString());
  await page.type('input[name="dependentBrahmaId"]', brahmaId);
  await page.type('input[name="mailId"]', randomUser.mailId);
  await page.type('input[name="mobileNo"]', randomUser.mobileNo);
  await page.type('input[name="registeredHospital"]', randomUser.registeredHospital);
  await page.type('#password-signup', "Anurag@123");
  await page.type('input[name="confirmPassword"]',"Anurag@123");
  // Click on the Submit button
  await page.click('.submitDependentForm');

})();
