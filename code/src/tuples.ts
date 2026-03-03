// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

const graph: [x: number, y: number] = [55.2, 41.3];
const [x, y] = graph;