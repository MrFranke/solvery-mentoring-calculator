const sum = (a, b) => {
  if (typeof a === "string" || typeof b === "string") {
    throw new Error('string is not good')
  }
 return  a + b
};

module.exports = { sum };
