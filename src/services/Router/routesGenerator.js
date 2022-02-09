const http = require('http');
const { urlParser } = require('./urlParser');

// List of available routes. Filled by useRoute()
const ROUTES = []; // Array of generated ROUTES

/**
 * Returning route if it exist, else return false.
 * @param  {string} method HTTP method, should be upper case
 * @param  {string} url Could contain calculated params like /:id
 */
const getRoute = ({ method, url }) => {
  const route = ROUTES.filter(
    (item) => !!url.match(item.url) && item.method === method.toUpperCase()
  );
  if (route.length) return route[0];
  return false;
};

/**
 * Create new route and push it into ROUTES. Example: { method, url, controller }
 * @param  {string} method HTTP method, should be defined in upper case
 * @param  {string} url Could contain calculated params like /:id
 * @param  {void} controller Specify which controller should be called
 */
const useRoute = (method, url, controller) => {
  if (!http.METHODS.includes(method)) {
    throw Error(
      `Trying to generate new route. Passed invalid method: ${method}`
    );
  }

  const isExist = getRoute({ method, url });
  if (isExist)
    throw Error(
      `Trying to generate new route. Route already exist: ${method} ${url}`
    );

  const regExp = urlParser(url);

  ROUTES.push({
    method,
    url: regExp,
    controller,
  });
};

module.exports = {
  useRoute,
  getRoute,
};
