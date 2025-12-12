import http from 'http';
import { tasks } from './tasks.js';

const serverPort = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/tasks" && req.method === "GET"){
    res.writeHead(200, {"Content-Type":"application/json"})
    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(404, {"Content-Type":"application/json"}); 
    res.end(JSON.stringify({message: "Not Found"}))
  }
});

server.listen(serverPort, () => {
  console.log("server running on port 3000")
});

