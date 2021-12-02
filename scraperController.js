const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance) {
  let browser;
  let gameArray;
  try {
    browser = await browserInstance;
    //get GameList await
    gameArray = await pageScraper.getGameList(browser);
    //get GameDetails await
    for (let i = 0; i < gameArray.length; i++) {
      let gameDetails = await pageScraper.getGameDetails(
        browser,
        gameArray[i].url
      );
      console.log(gameDetails);
    }
  } catch (error) {
    console.log("Could not resolve the browser instance => ", error);
  }
}

module.exports = (browserInstance) => {
  scrapeAll(browserInstance);
}