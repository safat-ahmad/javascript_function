function isArrayMethod(){
    let a = ["apple","mango","pineapple"];
    let b = Array.isArray(a);
    console.log(b);

    let c = "hello";
    let d = Array.isArray(c);
    console.log(d);
    

    let e = 12345;
    let f = Array.isArray(e);
    console.log(f);
    

    
}
isArrayMethod()