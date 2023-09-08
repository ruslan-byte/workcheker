import puppeteer from 'puppeteer';
import {sendMessage} from './bot.js'
var OldLengthOfWork = null;
const loop = async  () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate the page to a URL
  await page.goto('https://kwork.ru/projects?a=1&keyword=vue');
  const lengthOfWork = await page.evaluate(() => {
      return document.querySelectorAll(".card").length;
  });

  if(lengthOfWork > 0 && OldLengthOfWork !== lengthOfWork)
    sendMessage('Что-то есть! - ' + lengthOfWork)

  OldLengthOfWork = lengthOfWork;
  setTimeout(loop, 1000);
  
};

loop();