function targetOfaNumber(arr){
    let k = 20;
    let number = [];
    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] !== k){
            number.push(arr[i])

        }

    }
    return number;
}
let myArray = [10, 15, 20, 25, 20, 40, 50, 20, 30, 20];
let result = targetOfaNumber(myArray);
console.log(result);
