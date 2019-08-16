const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();


myEmitter.once('newListener', (event, listener) => {
    if(event === 'event') {
        myEmitter.on('event', () => {
            console.log('B');
        });
    }
});

myEmitter.on('event', () => {
    console.log('A');
});

myEmitter.emit('event');
// B
// A

console.log(myEmitter.getMaxListeners()); // 10




















/*
'newListener' 事件

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();


myEmitter.once('newListener', (event, listener) => {
    if(event === 'event') {
        myEmitter.on('event', () => {
            console.log('B');
        });
    }
});

myEmitter.on('event', () => {
    console.log('A');
});

myEmitter.emit('event');
// B
// A

*/





