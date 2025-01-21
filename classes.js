class car {
    constructor(name,brand, year){
        this.name=name;
        this.brand=brand;
        this.year=year;
    }
}

const car1 = new car("mahindra", "Tata",2000  );
console.log(car1.name + "\n" + car1.brand + "\n"+ car1.year);


let cars = {
    name:"thor",
    brand:"Tata",
    model:200,
    set lang(value) {
        this.name = value;
      }
}

cars.lang="Happy"
console.log(cars.name);
