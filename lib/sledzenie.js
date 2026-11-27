export function sledzenie(req, res, next) {
  console.log(`2. serwer: przyszło żądanie ${req.method} ${req.url}`);
  res.on('finish', () => {
    console.log(`3. serwer: odpowiedź wysłana, status ${res.statusCode}`);
  });
  next();
}
