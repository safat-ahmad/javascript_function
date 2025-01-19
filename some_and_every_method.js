function  someAndEveryMethod(){
    let a = [10, 15, 20, 25, 30];
    let b = a.every(checkeligible);
   console.log(b);
   
   function checkeligible(age){
    if(age >= 18)
    {
        return true;
    }
 }

 }
 someAndEveryMethod()



 function  someAndEveryMethods(){
    let c = [10, 15, 20, 25, 30];
    let d = c.some(checkeligibles);
   console.log(d);
   
   function checkeligibles(ages){
    if(ages >= 18)
    {
        return true;
    }
 }

 }
 someAndEveryMethods()