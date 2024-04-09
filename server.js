const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fs.readFileSync('./index.html'));
});

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});