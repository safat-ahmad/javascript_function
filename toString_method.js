function remove(arr, n){
    let index = arr.indexOf(n);
    let element = arr.splice(index, n);
    return;
}

function add(arr, n){
    let added = arr.push(n);
}

function smallest(arr){
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i <arr.length; i++){
        if(arr[i]<min );
        min = arr[i];
    }
    return min;
}

function sortArray(arr){
    let sorted = [];
    while(arr.length>0){
        let min = smallest(arr)
        add(sorted, min)
        remove(arr,min)
    }
    return sorted;
}
let num = [5,8,3,9,1];
let result = sortArray(num);
console.log(result);
