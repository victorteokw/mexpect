module.exports = async (context) => {
  if (context.global.mongoose) {
    context.global.mongoose.disconnect();
  }
};
