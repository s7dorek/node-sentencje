import express from 'express';
import fs from 'node:fs/promises';

const PORT = 3000;
const app = express();

async function wczytajSentencje() {
  const tekst = await fs.readFile('dane/sentencje.json', 'utf8');
  return JSON.parse(tekst);
}

app.use(express.static('public'));

app.get('/api/powitanie', (req, res) => {
  res.send('Witaj z Expressa!');
});

app.get('/api/sentencje', async (req, res) => {
  const sentencje = await wczytajSentencje();
  res.json(sentencje);
});

app.get('/api/sentencje/:numer', async (req, res) => {
  const sentencje = await wczytajSentencje();
  const tekst = sentencje[Number(req.params.numer)];
  if (tekst === undefined) {
    res.status(404).json({ blad: 'Nie ma sentencji o takim numerze' });
    return;
  }
  res.json({ tekst });
});

const server = app.listen(PORT);

server.on('listening', () => {
  console.log(`Serwer działa: http://localhost:${PORT}/`);
});
