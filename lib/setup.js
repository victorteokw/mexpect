const glob = require('glob');
const path = require('path');
const isCapitalized = require('./utils/isCapitalized');

// In different jest test files, we get different mongoose,
// Each with different compiled models.
// This behavior is very strange and it cause strange bugs.
// It will break our tests.
// Use the only mongoose instance here.
module.exports = async (url, modelDir, mongoose, context) => {
  const modelFiles = glob.sync(path.join(modelDir, '**/*.js'));
  const required = modelFiles.map(require);
  const anyModel = required.find((r) => r.modelName);
  if (anyModel) mongoose = anyModel.base;
  modelFiles.forEach((file, index) => {
    const r = required[index];
    const { name } = path.parse(file);
    if (r.constructor && (r.constructor.name === 'Schema') &&
      isCapitalized(name)) {
      mongoose.model(name, r);
    }
  });
  try {
    await mongoose.connect(url);
  } catch(err) {
    throw err;
  }
  context.global.mongoose = mongoose;
};
