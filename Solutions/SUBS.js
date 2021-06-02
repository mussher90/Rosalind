const fs = require('fs');
const file = process.argv[2];

const content = fs.readFileSync(`../Data Sets/Problem Sets/${file}`, 'utf8').split('\r\n');

const dna_String = content[0];
const motif = content[1];
const motif_RegEx = RegExp(motif, 'g');

let list ='';
let array1;
while((array1 = motif_RegEx.exec(dna_String))!== null){
    motif_RegEx.lastIndex = motif_RegEx.lastIndex - motif.length + 1;
    list+=motif_RegEx.lastIndex + ' ';
}

fs.writeFileSync('../Data Sets/Solution Sets/SUBS.txt', list);
