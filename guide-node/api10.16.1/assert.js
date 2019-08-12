
// const assert = require('assert');

// const { message } = new assert.AssertionError({
//     actual: 1,
//     expected: 2,
//     operator: 'strictEqual'
// });

// try {
//     assert.strictEqual(1, 2);
// } catch(err) {
//     assert(err instanceof assert.AssertionError);
//     assert.strictEqual(err.message, message);
// }


// const assert = require('assert');

// const obj1 = {
//     a: {
//         b: 1
//     }
// };
// const obj2 = {
//     a: {
//         b: 2
//     }
// };
// const obj3 = {
//     a: {
//         b: 1
//     }
// };

// const obj4 = Object.create(obj1);

// assert.deepEqual(obj1, obj3);








const assert = require('assert').strict;

// assert.deepStrictEqual({a: 1}, {a: '1'});

// assert.ifError(null);
// assert.ifError(0);

// assert.notStrictEqual(1, 2);
// assert.notStrictEqual(1, 1, '相等吗？');


// assert.ok(true);
// assert.ok();

// assert.ok(false, '这是假值');

// assert.ok(typeof 123 == 'string');

console.count();
console.count('default');
console.count('abc');







