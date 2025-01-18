function arraySort(arr){
    let value = [];
    for (let i = 0; i <= arr.length-1; i++){
       
        for( let j = i+1; j <=arr.length-1; j++){
            let index = 0;
            if(arr[i]>arr[j]){
             index = arr[i]
             arr[i] = arr[j];
             arr[j] = index;
            }
        } 
        value.push(arr[i])
}
return value;
}
let myArray = [20, 10,4, 5, 7, 30];
let sortArray = arraySort(myArray);
console.log(sortArray);
