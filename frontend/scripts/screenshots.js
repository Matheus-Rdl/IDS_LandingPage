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
  { name: 'mobile-small', width: 375, height: 667 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'mobile-large', width: 540, height: 720 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
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