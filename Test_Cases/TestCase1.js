const chai = require('chai');
const expect = chai.expect;
const puppeteer = require('puppeteer');
const HomePage  = require('../Reusable_Actions/HomePage');
const LoginPage  = require('../Reusable_Actions/LoginPage');
var data = require('../Data/data.json');
var homePage = new HomePage();
var loginPage = new LoginPage();
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(data.url);
  await homePage.clickSignIn(page); 
  await page.screenshot({path: '../ScreenShots/example.png'});
  await loginPage.typeUserName(page, data.email);
  await loginPage.typePassword(page, data.password);
  await loginPage.clickLogin(page);
  await page.screenshot({path: '../ScreenShots/example1.png'});
  const title = await page.title();
  await expect(title).to.equal('Login - My Store')
  await browser.close();
  console.log('Test Execution Completed');
})();

