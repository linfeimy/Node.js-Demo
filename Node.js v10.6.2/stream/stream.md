
```
const stream = require('stream');
console.log(stream);
```

```
{ [Function: Stream] super_: { [Function: EventEmitter] once: [Function: once],
        EventEmitter: [Circular],
        usingDomains: false,
        defaultMaxListeners: [Getter / Setter],
        init: [Function],
        listenerCount: [Function]
    },
    Readable: { [Function: Readable] ReadableState: [Function: ReadableState],
        super_: [Circular],
        _fromList: [Function: fromList]
    },
    Writable: { [Function: Writable] WritableState: [Function: WritableState],
        super_: [Circular]
    },
    Duplex: { [Function: Duplex] super_: { [Function: Readable] ReadableState: [Function: ReadableState],
            super_: [Circular],
            _fromList: [Function: fromList]
        }
    },
    Transform: { [Function: Transform] super_: { [Function: Duplex] super_: [Function]
        }
    },
    PassThrough: { [Function: PassThrough] super_: { [Function: Transform] super_: [Function]
        }
    },
    pipeline: [Function: pipeline],
    finished: [Function: eos],
    Stream: [Circular],
    _isUint8Array: [Function: isUint8Array],
    _uint8ArrayToBuffer: [Function: _uint8ArrayToBuffer]
}
```