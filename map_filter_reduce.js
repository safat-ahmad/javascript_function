let arr = [{name:"safat"},{name:"abc"},{name:"xyz"}];
let addEmail = arr.map(function(value){
    return {
      name: value.name,
      email: "safat@safat.com"
    }
})
console.log(addEmail);


//filter method

let newArr = [{name:"safat"},{name:"abc"},{name:"xyz"}];
let removeSecondIndex = newArr.filter(vlue => vlue.name !== "abc")
console.log(removeSecondIndex);


//reduce method

let num = [1,2,3,4,5,6,7,8,9,10];
let sumArr= num.reduce((firstindex, secondindex) => firstindex + secondindex,0)


console.log(sumArr);
