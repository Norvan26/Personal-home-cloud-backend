const http = require('http'); // Import the built-in http module

const host = 'localhost';
const port = 3000;

const requestListener = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // Set the response header
  res.end('Hello World!\n'); // Send the response body
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}/`);
});