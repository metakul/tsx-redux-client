// Import puppeteer
import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
    // devtools:true
    defaultViewport: null,

  });
  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto('http://localhost:3000/orgAdmin/dashboard');

  const title = await page.title();
  console.log("title", title);

   
  
  await addHospital(page);
})();


async function addHospital(page) {

  await page.waitForSelector(".addHospitalButton")
  await page.click(".addHospitalButton")


  await page.waitForSelector(".orgName")
  
  await page.click(".orgName")
  await page.type('.orgName',`org1`);

  const hospitalName=getRandomIndianCity()

  await page.click(".hospitalName")
  await page.type('.hospitalName',`${hospitalName} Military Hospital`);

  await page.click(".hospitalLocation")
  await page.type('.hospitalLocation',hospitalName);
  
  await page.click(".hospitalEmail")
  await page.type('.hospitalEmail',`${hospitalName}_hospital@gmail.com`);

  await page.click(".handleAddHospital")
}

// Function to generate a random Indian city name
function getRandomIndianCity() {
  const indianCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Jaipur", "Ahmedabad", "Pune", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada"];
  return indianCities[Math.floor(Math.random() * indianCities.length)];
}

