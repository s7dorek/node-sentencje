import fs from 'node:fs';

const PLIK = 'dane/sentencje.json';

console.log('B. start');
fs.readFile(PLIK, 'utf8', (err, tekst) => {
  if (err) {
    console.error('B. błąd:', err.message);
    return;
  }
  console.log(`B. wczytano ${tekst.length} znaków`);
});
console.log('B. koniec');
