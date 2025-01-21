const person = {
    fname: "safat",
    lname: "Ahmad",
    age:25,
    country: "India"
}

let { fname, lname, age, country} = person;
console.log(fname+ '   \ ' +lname);



let name = ["Safat", "ahmad","khan"];
let [a1,a2,a3,a4,a5] = name

console.log(a3);



let mname = "ahmad";
let [str1,str2,str3,str4] = mname;
console.log(str2);



let cars = ["volvo", "maruti","mahindra","suzuki","thor"];
let {[0]:car1, [1]:car2,[2]:car3, [3]:car4, [4]:car5} = cars;
console.log(cars[0] + "\n"+ car1);



let numbers = [10, 20,30,40,50,60,70,80,90];
let [a,b,c, ...rest] = numbers;
console.log(a , b , c, rest);

let firstname = "Safat";
let lastname = "Ahmad";

[firstname, lastname] = [lastname, firstname];


console.log(firstname + " " +lastname);
