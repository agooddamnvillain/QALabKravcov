import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';
import fs from 'fs';

const url = 'http://localhost:3000/';

(async () => {
  // Запускаємо Chrome
  const chrome = await launch({
    chromeFlags: ['--headless']
  });

  // Виконуємо Lighthouse аудит
  const options = {
    port: chrome.port,
    output: 'json',
  };

  const runnerResult = await lighthouse(url, options);

  // Зберігаємо результат у файл
  const reportJson = runnerResult.report;
  fs.writeFileSync('lighthouse-report.json', reportJson);

  console.log('Lighthouse Performance Report saved to lighthouse-report.json');
  console.log(`Performance Score: ${runnerResult.lhr.categories.performance.score * 100}`);

  await chrome.kill();
})();
