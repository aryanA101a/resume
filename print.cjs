const puppeteer = require('puppeteer');
const exiftool = require('node-exiftool');
const ep = new exiftool.ExiftoolProcess();

const PORT = process.argv[2] === '--dev' ? '3000' : '5000';
const OUT = process.argv[2] === '--dev' ? 'public' : 'dist';

(async () => {
  const browser = await puppeteer.launch({
    dumpio: true,
    headless: true,
    args: ['--font-render-hinting=none', '--lang=en-GB'],
    ignoreDefaultArgs: ['--disable-extensions'],
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 2560, height: 1440 });
  await page.goto(`http://localhost:${PORT}/resume/`, {
    waitUntil: 'networkidle2',
  });

  await page.pdf({
    path: `${OUT}/RavindaranNavinn_Resume.pdf`,
    printBackground: true,
    displayHeaderFooter: false,
    scale: 1,
  });

  await browser.close();

  await ep.open();

  await ep.writeMetadata(
    `${OUT}/AryanArora_Resume.pdf`,
    {
      all: '', // remove existing tags
      Title: 'Aryan Arora - Resume',
      Subject: 'Resume',
      Author: 'Aryan Arora',
      Creator: 'Chromium (Puppeteer)',
      Producer: 'github.com/aryanA101a/resume',
      'Keywords+': [
        'Aryan',
        'Arora',
        'Resume',
        'India',
        'Computer Science',
        'SWE',
        'Software Engineering',
        'Developer',
        'Student',
        'Coder',
        'App',
        'Frontend',
        'Backend',
        'Flutter',
        'Operatin System',
      ],
    },
    ['overwrite_original']
  );

  await ep.close();
})();
