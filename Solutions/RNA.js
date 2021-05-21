const fs = require('fs');

//const rna_Test = 'GATGGAACTTGACTACGTAAATT'

const rna_String = fs.readFileSync('../Data Sets/Problem Sets/RNA.txt', 'utf8');

//String replacement will only replace the first instance if a string or char is used.
//To replace all instances we need to pass in a regular expression.

fs.writeFileSync('../Data Sets/Solution Sets/RNASoln.txt', rna_String.replace(new RegExp(/T/g), 'U'))
console.log(rna_String.replace(new RegExp(/T/g), 'U'));

