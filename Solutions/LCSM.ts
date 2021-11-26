import * as fs from 'fs';
import {stringArray} from '../Library/FASTAHelper';

const file = process.argv[2];
const content = fs.readFileSync(`../Data Sets/Problem Sets/${file}`, 'utf8');

const findLCMOptions = (strand_1: string | undefined, strand_2: string | undefined) => {
    var ref_string = "";
    var compare_string = "";

    if(strand_1 == undefined || strand_2 == undefined){
        return null;
    }

    //we want to take substrings from the shorter strand
    //and look for mathces in the longer strand
    if(strand_1.length <= strand_2.length) {
        ref_string = strand_1;
        compare_string = strand_2;
    }
    else{
        ref_string = strand_2;
        compare_string = strand_1;
    }

    var sub_len = ref_string.length;

    var matches = new Array<string>();
    var noMatches = new Array<string>();

    var j = 2;
    var stop = false;

    while( j < sub_len && !stop){

        var i = 0;
        var matchFoundForLength = false;

        while(i + j <= sub_len){

            var substring = ref_string.substr(i, j);

            //if we've already checked this substring, skip it.
            if(matches.includes(substring) || noMatches.includes(substring)){
                i++
                continue;
            }
    
            //record common substrings and the fact that a matching 
            //substring of lenth j was found
            if(compare_string.search(substring) > -1){
                matchFoundForLength = true;
                matches.push(substring);
            }

            //if no substrings of length j are common to each string
            //then no substrings of length j + 1 are common either and 
            //we can stop looking
            if(i+j == sub_len && matchFoundForLength == false){
                stop = true;
                break;
            }
    
            i++
        }

        j++;
    }

    return matches.sort((a, b) => b.length - a.length);
}


const findLCM = (possibleMatches : string[] | null, list : string[]): string => {

    if(possibleMatches == null){
        return "no possible matches";
    }

    for(var x in possibleMatches){

        var hasMatch = true;

        list.forEach(y => hasMatch = y.includes(possibleMatches[x]) && hasMatch)

        if(hasMatch){
           return possibleMatches[x];
        }
    }

    return "No possible matches";
}


//take a string in FASTA form and return an array, sorted by length in ascending order 
//take the first two elements and find the common substrings - return an array in desc order
//iterate over the array and check if each of the strings contains the substring
//if yes return this substring as the LCM.

var test_array = stringArray(content);

var string1 = test_array.shift();

string1 = string1=="" ? test_array.shift() : string1;

var string2 = test_array.shift();

var possibleMatches = findLCMOptions(string1, string2);

var answer = findLCM(possibleMatches, test_array);

fs.writeFileSync('../Data Sets/Solution Sets/LCSM.txt', answer);



