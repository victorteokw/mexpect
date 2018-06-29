const mongoose = require('../utils/mongoose').load();

module.exports = (fd) => {
  console.log("models");
  console.log(Object.keys(mongoose.models));
  return {
    message: '',
    pass: true
  };
};
