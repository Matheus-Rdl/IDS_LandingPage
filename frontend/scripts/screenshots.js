import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Corrige __dirname no ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  const outputDir = path.join(__dirname, 'screenshots');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const devices = [
    { name: '01-nest-hub-max', width: 1280, height: 800 },
    { name: '02-nest-hub', width: 1024, height: 600 },
    { name: '03-surface-pro-7', width: 912, height: 1368 },
    { name: '04-asus-zenbook-fold', width: 853, height: 1280 },
    { name: '05-ipad-air', width: 820, height: 1180 },
    { name: '06-ipad-mini', width: 768, height: 1024 },
    { name: '07-surface-duo', width: 540, height: 720 },
    { name: '08-iphone-xr', width: 414, height: 896 },
    { name: '09-galaxy-a51-a71', width: 412, height: 914 },
    { name: '10-iphone-12-pro', width: 390, height: 844 },
    { name: '11-iphone-se', width: 375, height: 667 },
    { name: '12-galaxy-s8-plus', width: 360, height: 740 },
    { name: '13-galaxy-z-fold-5', width: 344, height: 882 },
  ];

  for (const device of devices) {
    await page.setViewport({
      width: device.width,
      height: device.height,
      isMobile: device.isMobile,
      deviceScaleFactor: 1,
    });

    await page.goto('http://localhost:5173', {
      waitUntil: 'networkidle2',
    });

    await new Promise(resolve => setTimeout(resolve, 1500));

    await page.screenshot({
      path: path.join(outputDir, `${device.name}.png`),
      fullPage: true,
    });

    console.log(`✅ ${device.name}.png gerado`);
  }

  await browser.close();
})();