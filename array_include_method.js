function includemethod(arr){
    for(let i = 0; i<arr.length; i++)
        if(arr.includes("Safat")){
            console.log("this value is exist in an array");  
            break; 
        }else{
            console.log("this value is not exist in an array");   
     break;
        }
    
        return arr;
}
let myarr = ["Safat", "hello","how","many"]
let result = includemethod(myarr)
console.log(result);
