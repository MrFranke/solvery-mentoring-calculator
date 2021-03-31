const version = require("../package.json").version;

const getVersion = () => {
  return Promise.resolve(version);
};

module.exports = {
  getVersion,
};
