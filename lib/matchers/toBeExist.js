const mongoose = require('mongoose');

module.exports = (fd) => {
  console.log("models");
  console.log(Object.keys(mongoose.models));
  return {
    message: '',
    pass: true
  };
};
