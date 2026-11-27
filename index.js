import express from 'express';
import { sledzenie } from './lib/sledzenie.js';
import trasy from './lib/trasy.js';

const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(sledzenie);
app.use(trasy);

const server = app.listen(PORT);

server.on('listening', () => {
  console.log(`Serwer działa: http://localhost:${PORT}/`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} jest zajęty – serwer działa już w innym terminalu?`);
  } else {
    console.error(err);
  }
  process.exit(1);
});
