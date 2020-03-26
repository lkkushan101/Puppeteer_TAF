const puppeteer = require('puppeteer');
 
class LoginPage  {
  async typeUserName(page,text) {
    await page.type('#email',text)
  }
  async typePassword(page,text) {
    await page.type('#passwd',text)
  }
  async clickLogin(page) {
    await page.click('#SubmitLogin > span')
  }
}
module.exports = LoginPage;