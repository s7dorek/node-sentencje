import fs from 'node:fs/promises';

const PLIK = 'dane/sentencje.json';

async function wczytaj() {
  console.log('C. start');
  try {
    const tekst = await fs.readFile(PLIK, 'utf8');
    const sentencje = JSON.parse(tekst);
    console.log(`C. wczytano ${sentencje.length} sentencji`);
    console.log(`C. pierwsza: ${sentencje[0]}`);
  } catch (err) {
    console.error('C. błąd:', err.message);
  }
}

wczytaj();
console.log('C. koniec');
