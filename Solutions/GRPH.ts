import { readFileSync, appendFileSync } from 'fs';
import { fastaObj, FastaObject } from '../Library/FASTAHelper';

const file = process.argv[2];
const content = readFileSync(`../Data Sets/Problem Sets/${file}`, 'utf8');

const fasta = fastaObj(content);

var prefixes : FastaObject = {};
var suffixes : FastaObject = {};
 
for(var x in fasta){
    var length = fasta[x].length;
    prefixes[x]=  fasta[x].substring(0, 3);
    suffixes[x]= fasta[x].substring(length-3, length);
}

var pairs = [];

for(var x in suffixes){
    for(var y in prefixes){
        if(suffixes[y] == prefixes[x] && x != y){
            var match = y + " " + x + "\r\n";
            appendFileSync('../Data Sets/Solution Sets/GRPH.txt', match);
            pairs.push({x, y});
        }
    }
}
