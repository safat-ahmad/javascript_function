function restParameter(...args){
    let sum = 0;
    for(let x of args)
        sum = x +sum;
    return sum;

}
let number = restParameter(10,20,30,40,50,60,70)

console.log(number);
