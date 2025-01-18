function removemiddleelementofarr(arr){
    if(arr.length == 0)return arr;
    let middle = Math.floor(arr.length/2)
    if (arr.length%2 ==0){
        arr.splice(middle-1, 2)
    }else {
        arr.splice(middle, 1)
    }
    return arr;
}
let myArray = [1,2,3,4,5,6,7,8];
let result = removemiddleelementofarr(myArray);
console.log(result);
