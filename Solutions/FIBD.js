
//Big thing to worry about here was that we were dealing with BigInts!!!
const reducer = (x, y) => BigInt(x) + BigInt(y);

const initializeArray = (n) => {
    var array = new Array(n);

    array[0] = 1;
    return array.fill(0, 1);
}


const fibMap = (array) => {
    var len = array.length;
    var newArray = new Array(len);
    newArray = newArray.fill(0);

    for(var i = 0; i< len; i++){
        if(i === 0){
            newArray[0] = array.reduce(reducer) - BigInt(array[0]);
        }
        else {
            newArray[i]=  array[i - 1];
        }
    }

    return newArray;
}

const iterFibMap = (n, k) => {
    var i = 0;

    var array = initializeArray(k);

    while(i < n){
        array = fibMap(array);
        i++;
    }

    return array;
}

console.log(iterFibMap(92, 19).reduce(reducer))


