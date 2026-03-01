// String
let greeting: string = 'Hello, TypeScript!';

// Number
let userCount: number = 42;

// Boolean
let isLoading: boolean = true;

// Array of numbers
let scores: number[] = [100, 95, 98];

// Function with explicit parameter and return types
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// TypeScript will ensure you pass the correct argument type
greet('Alice'); // OK
// greet(42);     // Error: Argument of type '42' is not assignable to parameter of type 'string'

// TypeScript infers 'string'
// let username = 'alice';

// TypeScript infers 'number'
// let score = 100;

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

// TypeScript infers return type as 'number'
// function add(a: number, b: number) {
//     return a + b;
// }

// TypeScript infers the shape of the object
const user = {
name: "Alice",
age: 30,
isAdmin: true
};

// TypeScript knows these properties exist
console.log(user.name);  // OK
// console.log(user.email); // Error: Property 'email' does not exist

let username: string = "alice";
// username = 42; // Error: Type 'number' is not assignable to type 'string'

let score = 100;  // TypeScript infers 'number'
// score = "high";  // Error: Type 'string' is not assignable to type 'number'

// This is valid JavaScript but can lead to bugs
// function add(a, b) {
//     return a + b;
// }

// console.log(add("5", 3)); // Returns "53" (string concatenation)

function add(a: number, b: number): number {
    return a + b;
}

// console.log(add("5", 3)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

// 1. JSON.parse returns 'any' because the structure isn't known at compile time
const data = JSON.parse('{ "name": "Alice", "age": 30 }');

// 2. Variables declared without initialization
let something;  // Type is 'any'
something = 'hello';
something = 42;  // No error