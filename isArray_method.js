function isArrayMethod(){
    let a = ["apple","mango","pineapple"];
    if(Array.isArray(a) == true){
        console.log("This is a Array");
    }else{
        console.log("This is not a Array");

    
    }
    let c = "hello";
    if(Array.isArray(c) == true){
        console.log("This is a Array");
    }else{
        console.log("This is not a Array");
        
    }
    

    let e = 12345;
    if(Array.isArray(e) == true){
        console.log("This is a Array");
    }else{
        console.log("This is not a Array");

    
}
}
isArrayMethod()