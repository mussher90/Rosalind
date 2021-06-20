const codonCount = require("../Library/CodonTable").codonCount;
const {fileData, writeFileData} = require("../Library/FileWriter")

var dna =  fileData();

const reducer = (x, y) => (x*codonCount[y]) % 1000000;

var number = 3*[...dna].reduce(reducer, 1);

writeFileData(number);