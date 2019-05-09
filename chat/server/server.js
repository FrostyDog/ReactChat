const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3030 });
console.log('-- Server started at :3030 --')

wss.on('connection', function connection(ws) {
  console.log(`CONN ${ws.id}`);
  ws.on('message', function incoming(data) {
    console.log(`MSG ${data}`);  
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
