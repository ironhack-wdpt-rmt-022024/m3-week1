const http = require("http"); // CommonJS  modules

// Instantiate the server
const server = http.createServer((request, response) => {
  
  if (request.url === "/") {
    // response.write("<h1>Hello Node!</h1>");
    response.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Home Page</title>
        </head>
        <body>
          <h1>Home Page!</h1>
        </body>
      </html>
      `); 
    
    response.end();
  }

  else if (request.url === "/about") {
    response.write("<h1>About route!</h1>");
    response.end();
  }

  else {
    response.writeHead(404); // Set the HTTP status code
    response.write("404 Not Found");
    response.end();    
  }
});

// Start server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Ctrl + C
