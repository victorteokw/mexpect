const findSchemaDefinition = require('../utils/findSchemaDefinition');

module.exports = (fd, type) => {
  global.expect(fd).toBeExist();
  const paths = fd._paths;
  const Model = global.mongoose.model(fd._modelName);
  const schemaDefinition = findSchemaDefinition(Model.schema.tree, fd);
  return {
    message: () => `Model path '${paths.join('.')}' is exist.`,
    pass: true
  };
};
