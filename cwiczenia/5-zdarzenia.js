import EventEmitter from 'node:events';

const sklep = new EventEmitter();

sklep.on('zamowienie', (produkt) => {
  console.log(`  [magazyn] zamówienie: ${produkt}`);
});

sklep.on('zamowienie', (produkt) => {
  console.log(`  [faktury] zamówienie: ${produkt}`);
});

console.log('przed emit');
sklep.emit('zamowienie', 'kawa');
console.log('po emit');
