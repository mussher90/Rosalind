const fs = require('fs');

//const testString = 'AAAACCCGGT';

const revc_String =  fs.readFileSync('../Data Sets/Problem Sets/REVC.txt', 'utf8');

const complementValues = (x) => {
    switch(x){
        case 'A':
            return 'T';
        case 'T': 
            return 'A';
        case 'C':
            return 'G';
        case 'G':
            return 'C';
        default:
            return;
    }
} 

const resultString = [...revc_String].map(x => complementValues(x)).reverse().join('');

fs.writeFileSync('../Data Sets/Solution Sets/REVCSoln.txt', resultString);

console.log(revc_String + '\n' + resultString);

