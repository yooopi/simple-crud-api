const getPersons = (req, res) => {
  console.log('GET', req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('getPersons ALL');
};

const postPerson = (req, res) => {
  console.log('POST', req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('postPerson');
};

const getPerson = (req, res) => {
  console.log('GET one person', req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('getPerson SINGLE');
};

const putPerson = (req, res) => {
  console.log('PUT', req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('putPerson');
};

const deletePerson = (req, res) => {
  console.log('DELETE', req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('deletePerson');
};

module.exports = {
  getPersons,
  postPerson,
  getPerson,
  putPerson,
  deletePerson,
};
