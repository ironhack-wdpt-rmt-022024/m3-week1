const http = require("http"); // CommonJS  modules

// Instantiate the server
const server = http.createServer((request, response) => {
  console.log("Incomming request");
  console.log("request.url", request.url);

  response.write("Hello Node!"); // Set the HTTP message body
  response.end(); // Send the resonse back
});

// Start server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

