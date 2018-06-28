const mongoose = require('mongoose');
const uncapitalize = require('./utils/uncapitalize');
const { _install } = require('./descriptors');

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

module.exports = () => {
  const modelNames = Object.keys(mongoose.models);
  const retval = {};
  modelNames.forEach((name) => {
    const descritorObj = nextPath(name);
    retval[uncapitalize(name)] = descritorObj;
  });
  _install(retval);
};
