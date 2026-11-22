console.log('1. start');

setTimeout(() => console.log('3. setTimeout 100 ms'), 100);
setTimeout(() => console.log('2. setTimeout 0 ms'), 0);

Promise.resolve().then(() => console.log('4. Promise.then'));

console.log('5. koniec');
