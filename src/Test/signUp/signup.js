// Import puppeteer
import puppeteer from 'puppeteer';

// Function to generate random email
function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(7);
  return `user${randomString}@gmail.com`;
}

// Function to generate random phone number
function generateRandomPhone() {
  const randomNumber = Math.floor(Math.random() * 1000000000); // Generates a 9-digit random number
  return `9${randomNumber.toString().padStart(9, '0')}`; // Ensures exactly 10 digits starting with '9'
}

// Function to generate random service number
function generateRandomServiceNo() {
  const randomNumber = Math.floor(Math.random() * 100000);
  const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Generates a random uppercase letter (A-Z)
  return `AB${randomNumber.toString().padStart(5, '0')}${randomChar}`;
}

(async () => {

  let brahmaId;
  // eslint-disable-next-line no-undef
  process.argv.forEach((arg) => {
    if (arg.startsWith('brahmaId:')) {
      brahmaId = arg.split(':')[1];
    }
  });

  if (!brahmaId) {
    console.error('Brahma ID not provided.');
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
  console.log(brahmaId)
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 2,
    defaultViewport: null,
    // devtools:true
  });
  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto('http://localhost:3000/applicant/signup');

  const title = await page.title();
  console.log(title);

  await page.waitForSelector('.servingLabel');

  //open serving signUpForm
  await page.click('.servingLabel');

  // input file:
  const dropZone = await page.waitForFunction('document.querySelector(".dropzone")');

  console.log(dropZone)
  // Generate a random file path
  const filePath = 'src/Test/signUp/Screen.jpg'; // Replace this with the path to your random image file

  // Find the input element for file upload
  const inputUploadHandle = await page.$('input[type=file]');

  // Upload the file
  await inputUploadHandle.uploadFile(filePath);

  // Ensure the page is loaded before proceeding
  await page.waitForSelector('.rank');

  // Click on the Autocomplete for rank
  await page.click('.rank');

  // Wait for the dropdown to appear
  await page.waitForSelector('.MuiAutocomplete-option');

  // Select a random rank option
  const rankOptions = ['Lieutenant', 'Major', 'Lieutenant Colonel'];
  const randomRankIndex = Math.floor(Math.random() * rankOptions.length);
  const selectedRank = rankOptions[randomRankIndex];
  console.log(selectedRank)
  await page.click(`.MuiAutocomplete-option[data-option-index="${randomRankIndex}"]`);

  // Fill other form fields
  await page.type('input[name="fullName"]', 'Shubham Kunwar');
  await page.type('input[name="serviceNo"]', generateRandomServiceNo());


  // add parent arm service 
  await page.type('input[name="parentService"]', 'parent arm service ');
  // add age
  await page.type('input[name="age"]', '26');

  // Select Sex
  await page.click(`input[name="row-radio-buttons-group"][value="MALE"]`); // Assuming 'Male' is selected

  // Fill Email
  await page.type('input[name="mailId"]', generateRandomEmail());

  // Fill Mobile Number

  await page.type('input[name="mobileNo"]', generateRandomPhone());

  // Fill Name of Kin
  await page.type('input[name="nameOfKin"]', 'Shubham Kunwar');

  //relation with KIn
  await page.type('input[name="relationWithKin"]', 'Father');

  // mobileNo of Kin
  await page.type('input[name="mobileNoOfKin"]', generateRandomPhone());

  // registered Hospital
  await page.type('input[name="registeredHospital"]', 'H0001');

  // orgName
  await page.type('input[name="orgName"]', 'org1');

  // Click on the Submit button
  await page.click('button[type="submit"]');


  //Start Dependent Signup
  await page.waitForSelector('.servingLabel');

  //open serving signUpForm
  await page.click('.dependentLabel');

})();
