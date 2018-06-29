const findSchemaDefinition = require('../utils/findSchemaDefinition');

module.exports = (fd) => {
  const mongoose = global.mongoose;
  let Model;
  try {
    Model = mongoose.model(fd._modelName);
  } catch(err) {
    return {
      message: () => `Model '${fd._modelName}' does not exist.`,
      pass: false
    };
  }

  const paths = fd._paths;
  const s = findSchemaDefinition(Model.schema.tree, paths);
  if (!s) {
    return {
      message: () => `${paths.length === 1 ? 'Field' : 'Path'} '${
        paths.join('.')}' does not exist on model '${fd._modelName}'.`,
      pass: false
    };
  }
  return {
    message: () => `Model path '${paths.join('.')}' is exist.`,
    pass: true
  };
};
