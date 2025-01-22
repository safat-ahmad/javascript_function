let arr=[1,2,3,4,5,6,7,8,9];
let even = arr.filter(value => value % 2 == 0)
console.log(even);





let myNumber = [1,2,3,4,5,6,7,8,9];
let odd = myNumber.filter(myOdd);
 

function myOdd(value){
    let oddNum = value % 2 !== 0;
    return oddNum;
}
console.log(odd);

