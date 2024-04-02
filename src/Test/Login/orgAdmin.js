// Import puppeteer
import puppeteer from 'puppeteer';
const OrgAdmin = {
  userName: 'OA01',
  password: 'Anurag@123',
  otp: Math.floor(100000 + Math.random() * 900000).toString() // Generate random OTP
};

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 5,
    devtools:true,
    defaultViewport: null,

  });
  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto('http://localhost:3000/');

  const title = await page.title();
  console.log("title", title);

  const element = await page.waitForSelector('.ORG_ADMIN');
  console.log(element)

  await element.click();

  await page.click('.loginUsername');
  await page.type('.loginUsername', OrgAdmin.userName);

  await page.click('.loginPassword');
  await page.type('.loginPassword', OrgAdmin.password);

  // Click on the submit button to send OTP
  await page.click('.loginButton');

  // Wait for OTP field to appear
  await page.waitForSelector('.otpFiller');

  await page.type('.otpFiller', OrgAdmin.otp);

  // Click on the verify OTP button
  await page.click('.verifyOtpButton');
  // Wait for navigation to complete to the dashboard
  await page.waitForNavigation();
 
  await addHospital(page);
})();

async function addHospital(page) {
  await page.waitForSelector(".addHospitalButton")
  await page.click(".addHospitalButton")
  
  const hospitalName=getRandomIndianCity()
  await page.waitForSelector(".orgName")
  
  await page.click(".orgName")
  await page.type('.orgName',`org1`);

  await page.click(".hospitalName")
  await page.type('.hospitalName',`${hospitalName} Military Hospital`);

  await page.click(".hospitalLocation")
  await page.type('.hospitalLocation',hospitalName);
  
  // await page.click(".hospitalEmail")
  // await page.type('.hospitalEmail',`${hospitalName}_hospital@gmail.com`);

  await page.click(".handleAddHospital")
}

// Function to generate a random Indian city name
function getRandomIndianCity() {
  const indianCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Jaipur", "Ahmedabad", "Pune", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada"];
  return indianCities[Math.floor(Math.random() * indianCities.length)];
}
