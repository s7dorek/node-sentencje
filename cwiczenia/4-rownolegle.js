function czekaj(ms, nazwa) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`  ${nazwa}: gotowe po ${ms} ms`);
      resolve(nazwa);
    }, ms);
  });
}

async function szeregowo() {
  console.time('szeregowo');
  await czekaj(1000, 'plik');
  await czekaj(1500, 'baza danych');
  await czekaj(500, 'sieć');
  console.timeEnd('szeregowo');
}

async function rownolegle() {
  console.time('równolegle');
  const wyniki = await Promise.all([
    czekaj(1000, 'plik'),
    czekaj(1500, 'baza danych'),
    czekaj(500, 'sieć'),
  ]);
  console.timeEnd('równolegle');
  console.log('  wyniki:', wyniki);
}

async function main() {
  await szeregowo();
  await rownolegle();
}

main();
