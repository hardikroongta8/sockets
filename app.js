const { WebSocketServer } = require("ws");
const uuid = require('uuid')

connections = [];


const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, req) {
    const connectionId = uuid.v4();
    ws.socketId = connectionId;
    connections.push(ws);
    console.log(req.headers);

    if(req.headers.auth !== 's3r9j3nrEru9rRE8hfrfRTwfwfRR')ws.close();

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    connections[0].send("Hi there");

    ws.send(ws.socketId);
});