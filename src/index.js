const { computer } = require("./computer");

const expression = process.argv[2];
const exprWithoutSpaces = expression.replace(/\s/g, "");
const [left, operator, right] = exprWithoutSpaces;
const result = computer(Number(left), Number(right), operator);

console.log(result);
