const express = require("express");
const morgan = require("morgan");

// Instantiate the server
const app = express();

/* Middleware functions - syntax/pattern
1. Use built-in middleware from Express. Example: express.static, express.json ...
2. Install npm middleware package: morgan
3. Create your own middleware

*/

// SETUP MIDDLEWARE: Always set up your middleware before the routes
// Logging middleware
app.use(morgan("dev"));

// Handle static files
app.use(express.static("public"));
// Handle parsing of JSON data on requests
app.use(express.json());

// Custom middleware
app.use(function (req, res, next) {
  console.log("HELLO FROM MY MIDDLEWARE!");
  next();
});

// ROUTES
//  GET '/'
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/index.html");
  next();
});

//  GET '/about'
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

//  GET '/example'
app.get("/example", (req, res) => {
  const data = {
    firstName: "Sarah",
    lastName: "Connor",
    age: 29,
  };

  res.json(data); // Send JSON response
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on 127.0.0.1:3000");
});
