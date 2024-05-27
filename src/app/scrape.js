const { chromium } = require('playwright');

async function scrape() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.valordolarblue.com.ar/', { waitUntil: 'networkidle' });

    await page.waitForSelector('div[title="Precio de venta del Dólar Blue en la Argentina"] strong');
    console.log('Selector found!');
    const price = await page.$eval('div[title="Precio de venta del Dólar Blue en la Argentina"] strong', el => el.textContent.trim());

    await browser.close();
    return price;
}

module.exports = scrape;