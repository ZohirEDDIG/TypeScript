function printMyResponseStatus(status: string | number) {
    console.log(`My status is '${status}'`);
    // console.log(`My status is '${status.toUpperCase()}'`); // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
}

console.log(printMyResponseStatus(200));
console.log(printMyResponseStatus('success'));