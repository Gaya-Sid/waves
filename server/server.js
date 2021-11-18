const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
const xss = require("xss-clean");
const mongoSanitaize = require("express-mongo-sanitize");

const routes = require("./routes");

// Middleware

// body parse
app.use(express.json());

// Sanitize
app.use(xss());
app.use(mongoSanitaize());

// routes
app.use("/api", routes);

app.listen(port, () => {
  console.log(
    `server running on port: ${port}, link: http://localhost:${port}`
  );
});
