import http from 'node:http';
import fs from 'node:fs/promises';

const PORT = 3000;

function wyslij(res, status, tresc, typ = 'text/plain') {
  res.writeHead(status, { 'Content-Type': `${typ}; charset=utf-8` });
  res.end(tresc);
}

function czekaj(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function zbudujStrone() {
  const [json, szablon] = await Promise.all([
    fs.readFile('dane/sentencje.json', 'utf8'),
    fs.readFile('szablony/strona.html', 'utf8'),
  ]);
  const sentencje = JSON.parse(json);
  const lista = sentencje.map((s) => `    <li>${s}</li>`).join('\n');
  return szablon.replace('{{LISTA}}', lista);
}

const server = http.createServer(async (req, res) => {
  console.log(new Date().toLocaleTimeString('pl-PL'), req.method, req.url);

  if (req.url === '/') {
    try {
      wyslij(res, 200, await zbudujStrone(), 'text/html');
    } catch (err) {
      console.error(err);
      wyslij(res, 500, 'Błąd serwera');
    }
  } else if (req.url === '/raport') {
    const koniec = Date.now() + 5000;
    while (Date.now() < koniec) {}          // 5 s pracy procesora
    wyslij(res, 200, 'Raport gotowy (pętla while – 5 s pracy procesora)');
  } else if (req.url === '/czekaj') {
    await czekaj(5000);                     // 5 s czekania na timer
    wyslij(res, 200, 'Gotowe (setTimeout – 5 s czekania)');
  } else {
    wyslij(res, 404, `Nie znaleziono: ${req.url}`);
  }
});

server.listen(PORT, () => {
  console.log(`Serwer działa: http://localhost:${PORT}/`);
});
