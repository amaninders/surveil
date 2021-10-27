const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("express-jwt");
const logger = require("morgan");
const cors = require("cors");

const exceptionHandler = require("./middleware/exceptionHandler");
const errorHandler = require("./middleware/errorHandler");

const activityProfileRouter = require("./routes/ActivityProfile.router");
const activityStreamRouter = require("./routes/ActivityStream.router");
const usersRouter = require("./routes/User.router");
const teamsRouter = require("./routes/Team.router");

const app = express();

app.use(logger("dev"));
app.use(cors({
  origin: [
    `http://localhost:${process.env.PORT}`,
    `http://localhost:3000`,
    `http://localhost:3002`,
  ],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    credentialsRequired: false,
    getToken: (req) => {
      return req.cookies.token;
    },
  })
);

app.use("/api/activity_profile", activityProfileRouter);
app.use("/api/activity", activityStreamRouter);
app.use("/api/users", usersRouter);
app.use("/api/teams", teamsRouter);

// catch 404 and forward to error handler
app.use(function(_, __, next) {
  next(createError(404));
});

app.use(exceptionHandler);
app.use(errorHandler);

module.exports = app;
