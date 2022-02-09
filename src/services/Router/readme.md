## Router service

Service provide router logic in express.js style

### How does it work?

1. Create list of available URL's and HTTP methods using `useRoute`
2. You should call `requestHandler` to handle all HTTP requests

### `requestHandler(req, res)`

Should be called once, while you create server. This handler gonna check if `req.url` and `req.method` available in routes.
If route doesn't exist will return `404` status.

```js
// Example
const { requestHandler } = require('./services/Router');

const server = http.createServer((req, res) => {
  requestHandler(req, res);
});
```

### `useRoute(method, url, controller)`

#### Params:

1. `method` — valid HTTP method in upper case. List of available methods is below.
2. `url` — url to handle. Could contain `/:id`
3. `controller` — function which should handle request. `controller(req, res)` will be called with `req` and `res` params passed from `requestHandler(req, res)`

```js
// Example
const { requestHandler, useRoute } = require('./services/Router');
const { myController } = require('./controllers');

useRoute('GET', '/user/:id', myController);

const server = http.createServer((req, res) => {
  requestHandler(req, res);
});

/* 
`myController(req, res)` will be called
on GET request to `/users/:id`
*/
```

### HTTP methods

- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`
- `ACL`
- `BIND`
- `CHECKOUT`
- `CONNECT`
- `COPY`
- `HEAD`
- `LINK`
- `LOCK`
- `M-SEARCH`
- `MERGE`
- `MKACTIVITY`
- `MKCALENDAR`
- `MKCOL`
- `MOVE`
- `NOTIFY`
- `OPTIONS`
- `PROPFIND`
- `PROPPATCH`
- `PURGE`
- `REBIND`
- `REPORT`
- `SEARCH`
- `SOURCE`
- `SUBSCRIBE`
- `TRACE`
- `UNBIND`
- `UNLINK`
- `UNLOCK`
- `UNSUBSCRIBE`
