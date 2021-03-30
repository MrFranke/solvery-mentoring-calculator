const { divide, sub, sum } = require("./operators");

const reducer = (operator) => {
  switch (operator) {
    case "+":
      return sum;
    case "-":
      return sub;
    case "/":
      return divide;
  }
};

const computer = (left, right, operator) => {
  return reducer(operator)(left, right);
};

module.exports = {
  computer,
};
