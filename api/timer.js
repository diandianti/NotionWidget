const app = require("../app");
const route = require("../routes/timer");

app.use("/api/", route);

module.exports = app;