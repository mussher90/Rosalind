export interface FastaObject {
    [key: string] : string
}

export const stringArray = (dnaList : string) : string[] => {
    var regex2 = RegExp("\\r\\n", 'g');

    var regex1 = RegExp(">(\\w+)\r\n", 'g');
    
    var modifiedString = dnaList.replace(regex1, '.').replace(regex2, "").split('.');

    return modifiedString.sort((a, b) => a.length - b.length );
};

export const fastaObj = (dnaList : string) : FastaObject =>{

    var serializedFasta : FastaObject = {};

    var regex1 = RegExp(">(\\w+)\r\n", 'g');
    var regex2 = RegExp("\\r\\n", 'g');

    var modifiedString : string[] = dnaList.split(regex1);

    for(var i = 0; i< modifiedString.length - 1; i++){
        var y = modifiedString[i];
        var z = modifiedString[i + 1];
        if(i % 2 != 0 && y != ''){
            serializedFasta[y] = z.replace(regex2, '');
        }
    }

    return serializedFasta; 
}

// var teststring = ">Rosalind_0498\r\n" +
// "AAATAAA\r\n" + 
// ">Rosalind_2391\r\n" +
// "AAATTTT\r\n" +
// ">Rosalind_2323\r\n" +
// "TTTTCCC\r\n" +
// ">Rosalind_0442\r\n" +
// "AAATCCC\r\n" +
// "AAATCCC\r\n" +
// ">Rosalind_5013\r\n" +
// "GGGTGGG";

// console.log(fastaObj(teststring));