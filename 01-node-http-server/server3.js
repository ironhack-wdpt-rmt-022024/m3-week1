const http = require("http"); // CommonJS  modules
const fs = require("fs"); // File system module

// Instantiate the server
const server = http.createServer((request, response) => {
  
  if (request.url === "/") {
    fs.readFile(`${__dirname}/index.html`, 'utf8', (err, loadedFile) => {
      // Error
      if (err) {
        response.writeHead(400);
        response.write(err);
        response.end();
      }
      // Success
      else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(loadedFile);
        response.end();
      }
    })
  }

  else if (request.url === "/about") {
    fs.readFile(`${__dirname}/about.html`, 'utf8', (err, loadedFile) => {
      // Error
      if (err) {
        response.writeHead(400);
        response.write(err);
        response.end();
      }
      // Success
      else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(loadedFile);
        response.end();
      }
    })
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
