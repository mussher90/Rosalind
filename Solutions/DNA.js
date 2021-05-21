const fs = require('fs');

var A = 0;
var C = 0;
var T = 0;
var G = 0;

const dna_text = fs.readFileSync('../Data Sets/DNA.txt', 'utf8').split("")

dna_text.forEach(x => {
    switch(x){
        case 'A': 
            A+=1;
            return 
        case 'C': 
            C+=1;
            return 
        case 'T': 
            T+=1;
            return 
        case 'G': 
            G+=1;
            return;
        default:
            console.log(x + ' is not cool');
            return;
    }
})

console.log([A, C, G, T])