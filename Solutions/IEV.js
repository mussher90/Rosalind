const fs = require('fs');
const file = process.argv[2];

const content = fs.readFileSync(`../Data Sets/Problem Sets/${file}`, 'utf8').split('\r\n');

const pop = content[0].split(' ');
const prob = [1, 1, 1, .75, .5, 0];
const index = [0, 1, 2, 3, 4, 5];

const reducer = (accumulator, i) => {return accumulator + pop[i]*prob[i]};

console.log(2*index.reduce(reducer, 0));

