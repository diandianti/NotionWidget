const app = require("../app");
const route = require("../routes/bar");

app.use("/api/", route);

module.exports = app;
