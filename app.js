const express = require("express");
const app = express();

// Middlewares
app.use("/posts", () => {
  console.log("Hello, this is a middleware running");
});

// ROUTES
app.get("/", (req, res) => {
  res.send("We are in home");
});

app.get("/posts", (req, res) => {
  res.send("We are in posts");
});

// How do we start listening to the server?
app.listen(3000);
