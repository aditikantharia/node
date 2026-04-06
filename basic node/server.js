//create a basic server using hhtp method
const http = require("http");

//create a route file
//req --> send By user
//res -->send By Server

const server = http.createServer((req, res) => {
  res.end("hello world !");
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});

//check on browser after run server.js file(node server.js)=> and open http://localhost:3000/ to see the output
