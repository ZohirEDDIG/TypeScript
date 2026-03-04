function getTime(): number {
    return new Date().getTime();
}

console.log(getTime());

function printHello(): void {
    console.log('Hello!');
}

printHello();

function multiply(a: number, b: number) {
    return a * b;
}

console.log(multiply(5, 2));

// function add(a: number, b: number, c?: number) {
//     return a + b + (c || 0);
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2));

function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}

console.log(pow(2, 2));
console.log(pow(2));

function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
    return dividend / divisor;
}

console.log(divide({ dividend: 10, divisor: 2 }));

function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(add(10, 10, 10, 10, 10));


type Negate = (value: number) => number;

const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(10))