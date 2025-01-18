function removeNumber(arr){
    let number = [];
    for(let i = 0; i<=arr.length-1; i++){
        if(!number.includes(arr[i]))
            number.push(arr[i])
    }
    return number;
}
let myArray = [1,2,3,4,5,6,6,1,2,3,4,5,3,4,5,];
let result = removeNumber(myArray);
console.log(result);
