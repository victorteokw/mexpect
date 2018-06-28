const capitalize = require('./utils/capitalize');

const nextPath = (_modelName, _paths = [], name) => {
  _paths = name ? [..._paths, name] : _paths;
  return new Proxy({
    _modelName,
    _paths
  }, {
    get(obj, name) {
      if (name === '_modelName') {
        return obj._modelName;
      }
      if (name === '_paths') {
        return obj._paths;
      }
      return nextPath(_modelName, _paths, name);
    }
  });
};

const root = {};

const rootPath = new Proxy(root, {
  get(obj, name) {
    if (!obj[name]) {
      obj[name] = nextPath(capitalize(name));
    }
    return obj[name];
  }
});

module.exports = rootPath;
