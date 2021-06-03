const fs = require('fs');
const file = process.argv[2];

const content = fs.readFileSync(`../Data Sets/Problem Sets/${file}`, 'utf8').split('\r\n');

const string1 = content[0];
const string2 = content[1];

let hammDist = 0;

for( var i = 0; i<= string1.length; i++){
    if(string1[i]!=string2[i]){hammDist++;}
}

console.log(hammDist);
