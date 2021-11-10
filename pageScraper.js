const scraperObject = {
  url: 'https://www.retrogames.cc/arcade-games/page/1.html',
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}`);
    await page.goto(this.url);

    // Get the links to the games
    console.log(`1`);
    await page.waitForSelector("div.post-des");
    console.log(`2`);
    let gameLinks = await page.evaluate(() => {
      let gameArray = [];
      let gameTitles;

      gameTitles = document.querySelectorAll("div.post-des h6 a");

      for (let i = 0; i < gameTitles.length; i++) {
        console.log(i);
        // let game = {
        //   title: gameTitles[i].innerText,
        // }
        console.log(gameTitles[i].innerText);
        gameArray.push(gameTitles[i].innerText);
      }

      return gameArray;
    });
    console.log(`Found ${gameLinks.length} games`);
    console.log(gameLinks);
  }
}

module.exports = scraperObject;