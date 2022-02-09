const http = require('http');
const { useRoutes } = require('./routes');
require('dotenv').config();
const { requestHandler } = require('./services/Router');

const port = process.env.SERVER_PORT;
useRoutes();

const server = http.createServer((req, res) => {
  requestHandler(req, res);
});

server.listen(port, () => {
  process.stdout.write(`Server started:\nhttp://localhost:${port}\n`);
});
