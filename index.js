import express from 'express';

const PORT = 3000;
const app = express();

app.get('/api/powitanie', (req, res) => {
  res.send('Witaj z Expressa!');
});

const server = app.listen(PORT);

server.on('listening', () => {
  console.log(`Serwer działa: http://localhost:${PORT}/`);
});
