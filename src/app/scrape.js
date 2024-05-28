const { chromium } = require('playwright');
const URL = 'https://www.valordolarblue.com.ar/';
async function scrape() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(URL);
    await page.waitForSelector('div[title="Precio de venta del Dólar Blue en la Argentina"] strong');
    console.log('Selector found!');
    const price = await page.$eval('div[title="Precio de venta del Dólar Blue en la Argentina"] strong', el => el.textContent.trim());
    await browser.close();
    return price;
}

module.exports = scrape;

