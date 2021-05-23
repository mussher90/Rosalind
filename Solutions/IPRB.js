//3 types: 
//D - Homogeneous Dominant
//H - Heterogeneous
//R - Recessive
//Anything offspring of a D will have dominant phenotype
//75% of HH offspring will have dominant phenotype
//50% of HR offspring will have dominant phenotype

const D = Number(process.argv[2]);
const H = Number(process.argv[3]);
const R = Number(process.argv[4]);

const Dom = D*(.5*(D - 1) + H + R);
const Het = .5*H*(.75*(H - 1) + R)
const Total = .5*(D + H + R)*(D + H + R - 1);

const probability = (Dom + Het)/Total;

console.log(probability);

