import { parentPort, workerData } from 'node:worker_threads';

const koniec = Date.now() + workerData.ms;
while (Date.now() < koniec) {}      // ta sama praca – w osobnym wątku

parentPort.postMessage(`Raport gotowy po ${workerData.ms} ms (osobny wątek)`);
