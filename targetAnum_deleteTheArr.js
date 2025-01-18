function targetANumberAndDelete(arr, num){
    let array = [];
    for(let i = 0; i<= arr.length-1; i++){
        if(arr[i] !== num){
            array.push(arr[i])
        }
    }
    return array
}
let myArray = [1,2,3,4,5,6,7,8,9];
let k = 6;
let result = targetANumberAndDelete(myArray, k);
console.log(result);
