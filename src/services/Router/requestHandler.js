const { getRoute } = require('./routesGenerator');

const requestHandler = (req, res) => {
  const route = getRoute(req);

  if (route) {
    route.controller(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found 404');
  }
};

module.exports = {
  requestHandler,
};
