import fs from 'node:fs';

const PLIK = 'dane/sentencje.json';

console.log('A. start');
const tekst = fs.readFileSync(PLIK, 'utf8');
console.log(`A. wczytano ${tekst.length} znaków`);
console.log('A. koniec');
