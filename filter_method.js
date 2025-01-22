let arr=[1,2,3,4,5,6,7,8,9];
let even = arr.filter(value => value % 2 == 0)
console.log(even);





let myNumber = [1,2,3,4,5,6,7,8,9];
let odd = myNumber.filter(myOdd);
 

function myOdd(value){
    let oddNum = value % 2 !== 0;
    return oddNum;
}
console.log(odd);




let cars = ["volvo", "mahindra","thor","bugati","scorpio"];
let bigLength = cars.filter(value => value.length >=5)
console.log(bigLength);



let person = [
    {name:"safat",
    age:20
    },
    {
    name:"mukhtar",
    age:18
    },
    {
        name:"wakar",
        age:15
    },
    {
        name:"hello",
        age:10
    },
    {
        name:"zzzz",
        age:50
    }

];

let adultAge = person.filter(name => name.age < 20)
console.log(adultAge);

