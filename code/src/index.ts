let x: unknown = 'hello';
console.log((x as string).length);

let y: unknown = 4;
console.log((y as string).length); // prints undefined since numbers don't have a length

// console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

let z: unknown = 'hello';
console.log((<string>z).length);

let a = 'hello';
console.log(((a as unknown) as number).length); // x is not actually a number so this will return undefined