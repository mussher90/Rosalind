const fs = require('fs');

//grabs the command line arguments
//index 2 because the arraya is [node.exe, REVC, "filename"]
const file = process.argv[2];

const codons = {'UUU': 'F',  'CUU': 'L',  'AUU': 'I',  'GUU': 'V',
'UUC': 'F',  'CUC': 'L',  'AUC': 'I',  'GUC': 'V',
'UUA': 'L',  'CUA': 'L',  'AUA': 'I',  'GUA': 'V',
'UUG': 'L',  'CUG': 'L',  'AUG': 'M',  'GUG': 'V',
'UCU': 'S',  'CCU': 'P',  'ACU': 'T',  'GCU': 'A',
'UCC': 'S',  'CCC': 'P',  'ACC': 'T',  'GCC': 'A',
'UCA': 'S',  'CCA': 'P',  'ACA': 'T',  'GCA': 'A',
'UCG': 'S',  'CCG': 'P',  'ACG': 'T',  'GCG': 'A',
'UAU': 'Y',  'CAU': 'H',  'AAU': 'N',  'GAU': 'D',
'UAC': 'Y',  'CAC': 'H',  'AAC': 'N',  'GAC': 'D',
'UAA': 'Stop', 'CAA': 'Q',  'AAA': 'K',  'GAA': 'E',
'UAG': 'Stop', 'CAG': 'Q',  'AAG': 'K',  'GAG': 'E',
'UGU': 'C',  'CGU': 'R',  'AGU': 'S',  'GGU': 'G',
'UGC': 'C',  'CGC': 'R',  'AGC': 'S',  'GGC': 'G',
'UGA': 'Stop', 'CGA': 'R',  'AGA': 'R',  'GGA': 'G',
'UGG': 'W',  'CGG': 'R',  'AGG': 'R',  'GGG': 'G'} 

var rna_String =  fs.readFileSync(`../Data Sets/Problem Sets/${file}`, 'utf8');

var protein_String = '';

while(rna_String.length != 0){
    var str = rna_String.substr(0, 3);

    if(codons[str] === 'Stop') break;
    else {protein_String += codons[str];
        rna_String = rna_String.substring(3)}
}

fs.writeFileSync('../Data Sets/Solution Sets/PROT.txt', protein_String);
