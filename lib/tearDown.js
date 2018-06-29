const { load } = require('./utils/mongoose');

// In different jest test files, we get different mongoose,
// Each with different compiled models.
// This behavior is very strange and it cause strange bugs.
// It will break our tests.
// Use the only mongoose instance here.
module.exports = async () => {
  const mongoose = load();
  if (mongoose) {
    mongoose.disconnect();
  }
};
