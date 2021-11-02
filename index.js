const browserObj = require('./browser');
const scraperController = require('./pageController');

//Start the browser and create a browser instance
let browserInstance = browserObj.startBrowser();

//Pass the browser instance to the scraper controller
scraperController(browserInstance);