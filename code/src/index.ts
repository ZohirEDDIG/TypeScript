type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year: CarYear;
    type: CarType;
    model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = 'Toyota';
const carModel: CarModel = 'Corolla';
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel,
};

console.log(car);

// type Animal = { name: String };
// type Bear = Animal & { honey: true };
// const bear: Bear = { name: 'Winnie', honey: true };
// console.log(bear);

type Status = 'success' | 'error';
let sts: Status = 'error';
console.log(sts);

interface Rectangle {
    height: number;
    width: number;
}

const rectangle: Rectangle = {
    height: 20,
    width: 100,
};

console.log(rectangle);

interface Animal {
    name: string;
}

interface Animal {
    age: number;
}

const dog: Animal = {
    name: 'Fido',
    age: 5,
};

console.log(dog);

interface ColoredRectangle extends Rectangle {
    color: string;
}

const coloredRectangle: ColoredRectangle = {
    height: 10,
    width: 20,
    color: 'red',
};