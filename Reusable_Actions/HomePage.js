const puppeteer = require('puppeteer');
 
class HomePage  {
  async clickSignIn(page) {
    await page.click('#header > div.nav > div > div > nav > div.header_user_info > a');
  }
}
module.exports = HomePage;