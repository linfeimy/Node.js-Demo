// console.log(Buffer);


/*
const buf1 = Buffer.alloc(10);
console.log(buf1); // <Buffer 00 00 00 00 00 00 00 00 00 00>


const buf2 = Buffer.alloc(10, 1);
console.log(buf2); // <Buffer 01 01 01 01 01 01 01 01 01 01>


const buf3 = Buffer.allocUnsafe(10);
console.log(buf3); // <Buffer d0 50 99 02 f7 01 00 00 ff ff>


const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4); // <Buffer 01 02 03>
for(const i of buf4) {
    console.log(i); // 分别输出1, 2, 3
}


const buf5 = Buffer.from('test');
console.log(buf5); // <Buffer 74 65 73 74>


const buf6 = Buffer.from('test', 'latin1');
console.log(buf6); // <Buffer 74 65 73 74>
*/


/*

const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;

const buf = new Buffer(arr.buffer);
console.log(buf); // <Buffer 88 13 a0 0f>

arr[1] = 6000;
console.log(buf); // <Buffer 88 13 70 17>

*/




const buf1 = Buffer.alloc(5);
console.log(buf1); // <Buffer 00 00 00 00 00>

const buf2 = Buffer.alloc(0);
console.log(buf2); // <Buffer >

const buf3 = Buffer.alloc(1);





