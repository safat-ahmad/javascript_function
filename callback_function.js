function callback(str){
    console.log(str);
    
}
function hello(){
  callback("Hello" + "\n")    ;
}

hello()


function callBackfunc(num){
    console.log(num);
}

function first(a , b){
    let sum = a + b;
    return sum;
}
let a = 20;
let b= 30;

let result = first(a,b);
callBackfunc(result)