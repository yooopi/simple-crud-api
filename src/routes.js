const { useRoute } = require('./services/Router');
const {
  getPersons,
  postPerson,
  getPerson,
  putPerson,
  deletePerson,
} = require('./controllers/person');

const useRoutes = () => {
  useRoute('GET', '/person', getPersons);
  useRoute('GET', '/person/:id', getPerson);
  useRoute('POST', '/person', postPerson);
  useRoute('PUT', '/person', putPerson);
  useRoute('DELETE', '/person', deletePerson);
};

module.exports = {
  useRoutes,
};
