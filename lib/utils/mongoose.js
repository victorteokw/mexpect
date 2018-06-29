let savedM;

module.exports = {
  save(m) { savedM = m; },
  load() { return savedM; }
};
