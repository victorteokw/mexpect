const isFunction = require('lodash.isfunction');

const findSchemaDefinition = (schemaTree, paths) => {
  paths = [...paths];
  if (paths.length === 0) {
    return schemaTree;
  } else if (isFunction(schemaTree)) {
    // Primitive type won't have subschemas
    return undefined;
  } else if (schemaTree.type && isFunction(schemaTree.type)) {
    // Primitive type won't have subschemas
    return undefined;
  } else {
    const path = paths.shift();
    let item = schemaTree[path];
    if (item) {
      if (Array.isArray(item)) {
        item = item[0];
      }
      if (item.constructor && (item.constructor.name === 'Schema')) {
        // This is a sub schema
        return findSchemaDefinition(item.tree, paths);
      } else {
        // This is an object
        return findSchemaDefinition(item, paths);
      }
    } else {
      return undefined;
    }
  }
};

module.exports = findSchemaDefinition;
