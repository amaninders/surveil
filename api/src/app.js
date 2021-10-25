const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("express-jwt");
const logger = require("morgan");

const exceptionHandler = require("./middleware/exceptionHandler");
const errorHandler = require("./middleware/errorHandler");

const usersRouter = require("./routes/User.router");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  getToken: req => {
    return req.cookies.token;
  }
}).unless({ path: ["/api/users/login/1"] }));

app.use("/api/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(_, __, next) {
  next(createError(404));
});

app.use(exceptionHandler);
app.use(errorHandler);

module.exports = app;
