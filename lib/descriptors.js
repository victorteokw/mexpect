const descriptors = {};

descriptors._install = (descs) => {
  Object.keys(descs).forEach((key) => {
    descriptors[key] = descs[key];
  });
};

module.exports = descriptors;
