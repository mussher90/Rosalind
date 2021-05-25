const fs = require('fs');

const content = fs.readFileSync('../Data Sets/Problem Sets/GC.txt', 'utf8').split('>');

const reducer = (x, y) => {
    if(y==='C' || y==='G'){
        x++;
    }

    return x;
}

const GCPercent = string => {

    var GCCount =  [...string].reduce(reducer, 0);

    return 100*GCCount/string.length;
}

const listOfObjects = [];

content.forEach(x => {

    if(x.length > 1) {

        var y = x.split("\r\n");

        var dnaObject = {title:"", dnaString: "", percentGC:0.0}
    
        dnaObject.title = y.shift();

        dnaObject.dnaString = y.reduce((z, w) => z + w);

        dnaObject.percentGC = GCPercent(dnaObject.dnaString);
    
        listOfObjects.push(dnaObject);
    }
    
})

const answer = listOfObjects.reduce((x, y) => {
    if(y.percentGC > x.percentGC){
        x.title = y.title;
        x.percentGC = y.percentGC;
    }
    return x;
}, {title:'', percentGC:0.0});

fs.writeFileSync('../Data Sets/Solution Sets/GCSoln.txt', answer.title + "\r\n" + answer.percentGC);