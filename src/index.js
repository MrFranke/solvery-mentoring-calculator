const { computer } = require("./computer");
const { getVersion } = require("./getVersion");

const command = process.argv[2];

if (command === "--version") {
  getVersion().then(console.log);
  return;
}

const exprWithoutSpaces = expression.replace(/\s/g, "");
const [left, operator, right] = exprWithoutSpaces;
const result = computer(Number(left), Number(right), operator);

console.log(result);
