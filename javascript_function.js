function restParameter(...args){
    let sum = 0;
    for(let x of args)
        sum = x +sum;
    return sum;

}
let number = restParameter(10,20,30,40,50,60,70)

console.log(number);


function restParametr(...arg){
    let totalSum=0;
    for(let z of arg)
        totalSum = z + totalSum
        return totalSum;
    
}
let sumSumber = restParametr(10,20,30,40);
console.log(sumSumber);

