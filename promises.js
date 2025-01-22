function  promise(complete){
    return new Promise(function(successful, failed){
        if(complete){
            successful("This code is successful")
        }else{
            failed("This code is failed")
        }
    })
}
console.log(promise(true));
