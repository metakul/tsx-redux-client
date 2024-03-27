// // Import puppeteer
// import puppeteer from 'puppeteer';
// const HospitalAdmin = {
//   userName: 'H0001',
//   password: 'Anurag@123',
//   otp: Math.floor(100000 + Math.random() * 900000).toString() // Generate random OTP
// };

// (async () => {
//   // Launch the browser
//   const browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 12,
//     // devtools:true
//     defaultViewport: null,

//   });
//   // Create a page
//   const page = await browser.newPage();

//   // Go to your site
//   await page.goto('http://localhost:3000/');

//   const title = await page.title();
//   console.log("title", title);

//   const element = await page.waitForSelector('.HOSPITAL_ADMIN');
//   console.log(element)

//   await element.click();

//   await page.click('.loginUsername');
//   await page.type('.loginUsername', HospitalAdmin.userName);

//   await page.click('.loginPassword');
//   await page.type('.loginPassword', HospitalAdmin.password);

//   // Click on the submit button to send OTP
//   await page.click('.loginButton');

//   // Wait for OTP field to appear
//   await page.waitForSelector('.otpFiller');

//   await page.type('.otpFiller', HospitalAdmin.otp);

//   // Click on the verify OTP button
//   await page.click('.verifyOtpButton');
//   // Wait for navigation to complete to the dashboard
//   await page.waitForNavigation();

//   await addHospital(page);
// })();


// async function addHospital(page) {

//   const hospitalName=getRandomIndianCity()
  
//   await page.type('.hospitalName',`${hospitalName} Military Hospital`);

//   // Click on the location field
//   await page.click('#hospitalLocation',hospitalName);

//   await page.click('.hospitalEmail',generateRandomEmail());
// }

// // Function to generate a random Indian city name
// function getRandomIndianCity() {
//   const indianCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Jaipur", "Ahmedabad", "Pune", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada"];
//   return indianCities[Math.floor(Math.random() * indianCities.length)];
// }

// // Function to generate a random email address with Indian city name and "Hospital" domain
// function generateRandomEmail(city) {
//   const randomSuffix = Math.random().toString(36).substring(2, 8);
//   return `${city.replace(/\s+/g, '')}Hospital${randomSuffix}@gmail.com`.toLowerCase();
// }