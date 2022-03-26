const app = require("../app");
const route = require("../routes/clock");

app.use("/api/", route);

module.exports = app;
