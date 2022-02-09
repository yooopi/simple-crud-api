// Used for exact match of url in routes
const urlParser = (url) => {
  const split = url.split('/');

  split.forEach((item, i) => {
    if (/^:/.test(item)) split[i] = `[^\\/]+`; // allow to use :id in routes
    if (i + 1 === split.length) split[i] += `$`; // add exact match for end of string
    return item;
  });

  return new RegExp(split.join('/'), 'gm');
};

module.exports = {
  urlParser,
};
