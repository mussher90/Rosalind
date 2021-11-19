const generations = process.argv[2];
const min = process.argv[3];

const HH = .25;
const HH_C = .75;

const factorial = (n) => {
    if(n!=1)return n*factorial(n-1);
    else return n;
}



const binomial =  (n, k) => {
    var num = factorial(n);
    var den_1 = factorial(k);
    var den_2 = factorial(n - k);
    
    return num/(den_1*den_2);
}

const LIA = (k, N) => {
    var odds = 0;
    var o = Math.pow(2, k);
    for(var i = N; i<o+1; i++){
        odds+= binomial(o, i)*Math.pow(HH, i)*Math.pow(HH_C, o - i);
    }

    return odds;
}

console.log(binomial(128, 19));