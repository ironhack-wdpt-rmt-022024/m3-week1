// IMPORT PACKAGES
const express = require("express");
const morgan = require("morgan");

const PORT = 3000;

// INSTANTIATE THE SERVER
const app = express();

// MIDDLEWARE
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.json());

// SET UP ROUTES

// Example - Query Strings  (?key=value)
//  GET '/search'
app.get("/search", (req, res) => {
  console.log("req.query", req.query);
  res.send();
});

// Example - Route Parameters (:)
//  GET "/students/Rafa3399"
app.get("/students/:username", (req, res) => {
  console.log("req.params", req.params);
  res.send();
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
