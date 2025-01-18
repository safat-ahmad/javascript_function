function removeWords(arr, str){
let array = [];
for(let i = 0; i<= arr.length-1; i++){
    if(arr[i] !== str)
        array.push(arr[i])
}
return array;
}
let myArray = ["Hello", "How", "Hey", "Many","Apple"];
let myStr = "Apple";
let result = removeWords(myArray, myStr);
console.log(result);
