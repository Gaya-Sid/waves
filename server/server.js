const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
const xss = require("xss-clean");
const mongoSanitaize = require("express-mongo-sanitize");

const routes = require("./routes");

// Database
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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
