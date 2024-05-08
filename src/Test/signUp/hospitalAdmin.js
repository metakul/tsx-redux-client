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

    let hospitalId;
    // eslint-disable-next-line no-undef
    process.argv.forEach((arg) => {
      if (arg.startsWith('hospitalId:')) {
        hospitalId = arg.split(':')[1];
      }
    });
  
    if (!hospitalId) {
      console.error('Hospital ID not provided.');
      // eslint-disable-next-line no-undef
      process.exit(1);
    }


    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 5,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto('http://localhost:3000/admin/signup');

  
    // await page.type('input[name="orgName"]', 'org1');
    // await page.type('input[name="hospitalId"]', hospitalId);
    await page.type('input[name="userName"]', 'Shubham Kunwar');
    await page.type('input[name="serviceNo"]', generateRandomServiceNo());
    await page.type('input[name="mobileNo"]', generateRandomPhone());
    await page.type('input[name="mailId"]', generateRandomEmail());
    await page.type('input[name="location"]', "Kanpur");
    await page.type('#password-signup', 'Anurag@123');
    await page.type('#confirmPassword', 'Anurag@123');

    await page.waitForFunction('document.querySelector("#fileGrid")');
    const filePath = 'src/Test/signUp/rabbit.pdf';

    // Find the input element for file upload
    const inputUploadHandle = await page.$('input[type=file]');

    // Upload the file
    await inputUploadHandle.uploadFile(filePath);

    await page.click('.handleNext');

})();
