const codons = require("../Library/CodonTable").codons;
const {fileData, writeFileData} = require("../Library/FileWriter")

var rna_String =  fileData();

var protein_String = '';

while(rna_String.length != 0){
    var str = rna_String.substr(0, 3);

    if(codons[str] === 'Stop') break;
    else {protein_String += codons[str];
        rna_String = rna_String.substring(3)}
}

writeFileData(protein_String);
