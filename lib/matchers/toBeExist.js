const monUtil = require('../utils/mongoose');

module.exports = (fd) => {
  const mongoose = monUtil.load();
  console.log("models");
  console.log(Object.keys(mongoose.models));
  return {
    message: '',
    pass: true
  };
};
