const app = require("../app");
const route = require("../routes/calc");

app.use("/api/", route);

module.exports = app;