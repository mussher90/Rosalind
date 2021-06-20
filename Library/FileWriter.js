const fs = require('fs');

//grabs the command line arguments
//index 2 because the arraya is [node.exe, REVC, "filename"]
const file = process.argv[2];

const fileData = () => fs.readFileSync(`../Data Sets/Problem Sets/${file}`, 'utf8').split("\r\n")[0];

const writeFileData = (solution) => fs.writeFileSync(`../Data Sets/Solution Sets/${file}`, solution);

module.exports = {fileData, writeFileData}