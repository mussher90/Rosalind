var list = {'Rosalind_0498':'AAATAAA',
'Rosalind_2391':'AAATTTT',
'Rosalind_2323':'TTTTCCC',
'Rosalind_0442':'AAATCCC',
'Rosalind_5013':'GGGTGGG'};

var regex1 = RegExp(">(\\w+)\r\n", 'g');

console.log(input.split(regex1))

var prefixes = {};
var suffixes = {};
 
for(var x in list){
    var length = list[x].length;
    prefixes[x]=  list[x].substring(0, 3);
    suffixes[x]= list[x].substring(length-3, length);
}

var pairs = [];

for(var x in suffixes){
    for(var y in prefixes){
        if(suffixes[y] == prefixes[x] && x != y){
            console.log(y + ' ' + x)
            pairs.push({x, y});
        }
    }
}
