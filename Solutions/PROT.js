const fs = require('fs');
const codons = require("../Library/CodonTable").codons;

//grabs the command line arguments
//index 2 because the arraya is [node.exe, REVC, "filename"]
const file = process.argv[2];

var rna_String =  fs.readFileSync(`../Data Sets/Problem Sets/${file}`, 'utf8');

var protein_String = '';

while(rna_String.length != 0){
    var str = rna_String.substr(0, 3);

    if(codons[str] === 'Stop') break;
    else {protein_String += codons[str];
        rna_String = rna_String.substring(3)}
}

fs.writeFileSync('../Data Sets/Solution Sets/PROT.txt', protein_String);
