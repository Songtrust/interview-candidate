const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World!</h1>");
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Hello World! -> http://localhost:3000");
});
