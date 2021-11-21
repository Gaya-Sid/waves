const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3001;

const mongoose = require("mongoose");
const xss = require("xss-clean");
const mongoSanitaize = require("express-mongo-sanitize");

const routes = require("./routes");

const {
  handleError,
  convertToApiErrorFormat
} = require("./middleware/apiError");

// Database
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// middleware

// body parse
app.use(express.json());

// sanitize
app.use(xss());
app.use(mongoSanitaize());

// routes
app.use("/api", routes);

// handle errors
app.use(convertToApiErrorFormat);
app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(port, () => {
  console.log(
    `server running on port: ${port}, link: http://localhost:${port}`
  );
});
