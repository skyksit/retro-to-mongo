const scraperObject = {
  url: "https://www.retrogames.cc/arcade-games/page/1.html",
  async getGameList(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}`);
    await page.goto(this.url);
    // Get the games list scraped from the page

    await page.waitForSelector("div.post-des");
    let gameList = await page.evaluate(() => {
      let gameList = [];
      let gameListItems = document.querySelectorAll("div.post-des h6 a");
      gameListItems.forEach((game) => {
        gameList.push({
          title: game.innerText,
          url: game.href,
        });
      });
      return gameList;
    });
    console.log(`Found ${gameList.length} games`);
    return gameList;
  },
  async getGameDetails(browser, url) {
    let newPage = await browser.newPage();
    console.log(`Navigating to ${url}`);
    await newPage.goto(url);
    // Get the game details scraped from the page
    await newPage.waitForSelector("textarea");
    let gameDetails = await newPage.evaluate(() => {
      let gameDetails = document.querySelector("textarea");
      //get textarea value
      console.log(`gameDetails.value = ${gameDetails.value}`);
      let gameDetailsText = gameDetails.value;
      return gameDetailsText;
    });
    await newPage.close();
    return gameDetails;
  },
};

module.exports = scraperObject;