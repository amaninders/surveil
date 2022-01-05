/**
 * Module dependencies.
 */

require("dotenv").config();
require("express-async-errors");
 
const debug = require("debug")("api:server");
const http = require("http");
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
const organizationRouter = require("./routes/Organization.router");
const allSitesRouter = require("./routes/AllSites.router");

const app = express();

app.use(logger("dev"));
app.use(
  cors({
    origin: [
      `http://localhost:${process.env.PORT}`,
      `http://localhost:3000`,
      `http://localhost:3002`,
      `https://surveil.herokuapp.com/`
    ],
    credentials: true,
  })
);
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

app.use("/api/organization", organizationRouter);
app.use("/api/activity_profile", activityProfileRouter);
app.use("/api/activity", activityStreamRouter);
app.use("/api/users", usersRouter);
app.use("/api/teams", teamsRouter);
app.use("/api/allsites", allSitesRouter);

// catch 404 and forward to error handler
app.use(function(_, __, next) {
  next(createError(404));
});

app.use(exceptionHandler);
app.use(errorHandler);


/**
 * Event listener for HTTP server "error" event.
 */

 const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string"
    ? "Pipe " + port
    : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case "EACCES":
    console.error(bind + " requires elevated privileges");
    process.exit(1);
    break;
  case "EADDRINUSE":
    console.error(bind + " is already in use");
    process.exit(1);
    break;
  default:
    throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
  debug("Listening on " + bind);
};

/**
 * Get port from environment and store in Express.
 */

const port = Number(process.env.PORT || "6000");
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.on("error", onError);
server.on("listening", onListening);

(async function() {
  // Load models and create any tables that don't already exist
  const { sequelize } = require("../src/models");
  await sequelize.sync();

  // Listen on port
  server.listen(port);
})();