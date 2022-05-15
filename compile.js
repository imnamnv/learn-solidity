const path = require("path");
const fs = require("fs");
const solc = require("solc");

const loteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(loteryPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Lottery"];
