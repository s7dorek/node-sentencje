import express from 'express';
import fs from 'node:fs/promises';

async function wczytajSentencje() {
  const tekst = await fs.readFile('dane/sentencje.json', 'utf8');
  return JSON.parse(tekst);
}

const trasy = express.Router();

trasy.get('/api/powitanie', (req, res) => {
  res.send('Witaj z Expressa!');
});

trasy.get('/api/sentencje', async (req, res) => {
  const sentencje = await wczytajSentencje();
  res.json(sentencje);
});

trasy.get('/api/sentencje/:numer', async (req, res) => {
  const sentencje = await wczytajSentencje();
  const tekst = sentencje[Number(req.params.numer)];
  if (tekst === undefined) {
    res.status(404).json({ blad: 'Nie ma sentencji o takim numerze' });
    return;
  }
  res.json({ tekst });
});

export default trasy;
