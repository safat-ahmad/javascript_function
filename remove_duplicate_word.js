function removeDuplicatWord(arr){
    let word = [];
    for (let i = 0; i <= arr.length-1; i++){
        if(!word.includes(arr[i]))
            word.push(arr[i])
    }
    return word;
}
let myArray = ["hello","how","hello","are","how"];
let result = removeDuplicatWord(myArray);
console.log(result);
