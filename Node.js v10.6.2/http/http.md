```
    const http = require('http');
    console.log(http);
```

```
{
    _connectionListener: [Function: connectionListener],
    METHODS: ['ACL', 'BIND', 'CHECKOUT', 'CONNECT', 'COPY', 'DELETE', 'GET', 'HEAD', 'LINK', 'LOCK', 'M-SEARCH', 'MERGE', 'MKACTIVITY', 'MKCALENDAR', 'MKCOL', 'MOVE', 'NOTIFY', 'OPTIONS', 'PATCH', 'POST', 'PROPFIND', 'PROPPATCH', 'PURGE', 'PUT', 'REBIND', 'REPORT', 'SEARCH', 'SOURCE', 'SUBSCRIBE', 'TRACE', 'UNBIND', 'UNLINK', 'UNLOCK', 'UNSUBSCRIBE'],
    STATUS_CODES: {
        '100': 'Continue',
        '101': 'Switching Protocols',
        '102': 'Processing',
        '103': 'Early Hints',
        '200': 'OK',
        '201': 'Created',
        '202': 'Accepted',
        '203': 'Non-Authoritative Information',
        '204': 'No Content',
        '205': 'Reset Content',
        '206': 'Partial Content',
        '207': 'Multi-Status',
        '208': 'Already Reported',
        '226': 'IM Used',
        '300': 'Multiple Choices',
        '301': 'Moved Permanently',
        '302': 'Found',
        '303': 'See Other',
        '304': 'Not Modified',
        '305': 'Use Proxy',
        '307': 'Temporary Redirect',
        '308': 'Permanent Redirect',
        '400': 'Bad Request',
        '401': 'Unauthorized',
        '402': 'Payment Required',
        '403': 'Forbidden',
        '404': 'Not Found',
        '405': 'Method Not Allowed',
        '406': 'Not Acceptable',
        '407': 'Proxy Authentication Required',
        '408': 'Request Timeout',
        '409': 'Conflict',
        '410': 'Gone',
        '411': 'Length Required',
        '412': 'Precondition Failed',
        '413': 'Payload Too Large',
        '414': 'URI Too Long',
        '415': 'Unsupported Media Type',
        '416': 'Range Not Satisfiable',
        '417': 'Expectation Failed',
        '418': 'I\'m a Teapot',
        '421': 'Misdirected Request',
        '422': 'Unprocessable Entity',
        '423': 'Locked',
        '424': 'Failed Dependency',
        '425': 'Unordered Collection',
        '426': 'Upgrade Required',
        '428': 'Precondition Required',
        '429': 'Too Many Requests',
        '431': 'Request Header Fields Too Large',
        '451': 'Unavailable For Legal Reasons',
        '500': 'Internal Server Error',
        '501': 'Not Implemented',
        '502': 'Bad Gateway',
        '503': 'Service Unavailable',
        '504': 'Gateway Timeout',
        '505': 'HTTP Version Not Supported',
        '506': 'Variant Also Negotiates',
        '507': 'Insufficient Storage',
        '508': 'Loop Detected',
        '509': 'Bandwidth Limit Exceeded',
        '510': 'Not Extended',
        '511': 'Network Authentication Required'
    },
    Agent: { [Function: Agent] super_: { [Function: EventEmitter] once: [Function: once],
            EventEmitter: [Circular],
            usingDomains: false,
            defaultMaxListeners: [Getter / Setter],
            init: [Function],
            listenerCount: [Function]
        },
        defaultMaxSockets: Infinity
    },
    ClientRequest: { [Function: ClientRequest] super_: { [Function: OutgoingMessage] super_: [Function]
        }
    },
    IncomingMessage: { [Function: IncomingMessage] super_: { [Function: Readable] ReadableState: [Function: ReadableState],
            super_: [Function],
            _fromList: [Function: fromList]
        }
    },
    OutgoingMessage: { [Function: OutgoingMessage] super_: { [Function: Stream] super_: [Function],
            Readable: [Function],
            Writable: [Function],
            Duplex: [Function],
            Transform: [Function],
            PassThrough: [Function],
            pipeline: [Function: pipeline],
            finished: [Function: eos],
            Stream: [Circular],
            _isUint8Array: [Function: isUint8Array],
            _uint8ArrayToBuffer: [Function: _uint8ArrayToBuffer]
        }
    },
    Server: { [Function: Server] super_: { [Function: Server] super_: [Function]
        }
    },
    ServerResponse: { [Function: ServerResponse] super_: { [Function: OutgoingMessage] super_: [Function]
        }
    },
    createServer: [Function: createServer],
    get: [Function: get],
    request: [Function: request],
    maxHeaderSize: [Getter],
    globalAgent: [Getter / Setter]
}
```






```
const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.write('Hello World!');
    res.end();
}).listen(3000);
```

Node.js 的 HTTP API 都非常底层。 它仅进行流处理和消息解析。 它将消息解析为消息头和消息主体，但不会解析具体的消息头或消息主体。

有关如何处理重复消息头的详细信息，参阅 message.headers。




```

```









```

```









```

```








```

```








```

```








```

```








```

```
