function filteringoddnumber(arr){
    let oddNumber = [];
    for (let i = 0; i<= arr.length-1; i++){
        if(arr[i] % 2 == 0){
           oddNumber.push(arr[i])
        }
    }
    return oddNumber;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = filteringoddnumber(arr);
console.log(result);
