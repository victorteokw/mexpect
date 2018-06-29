module.exports = (fd) => {
  const mongoose = global.mongoose;
  console.log("models");
  console.log(Object.keys(mongoose.models));
  return {
    message: '',
    pass: true
  };
};
