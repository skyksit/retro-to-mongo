const scraperObject = {
  url: 'https://www.retrogames.cc/arcade-games/page/1.html',
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}`);
    await page.goto(this.url);
  }
}

module.exports = scraperObject;