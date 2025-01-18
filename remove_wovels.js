function removeWovels(strlngs){
    let str = "";
    let wovels = "aeiouAEIOU";
    for(let i = 0; i <= strlngs.length-1; i++){
        if(!wovels.includes(strlngs[i]))
        {
            str = str + strlngs[i]
        }
    }
    return str;
}
let myStr = "Hello I am Safat Ahmad Khan";
let result = removeWovels(myStr);
console.log(result);
