function remove(str){
    if (str.length == 0){
        return str;
    }
    let middle = Math.floor(str.length / 2);
    if(str.length % 2 ==0){
        return  str.slice(0,middle -1) + str.slice(middle +1);
    }else{
        return str.slice(0,middle) + str.slice(middle +1);
    }
    
}
let myStr = "abcde";
let result = remove(myStr);
console.log(result);
