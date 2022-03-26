const app = require("../app");
const route = require("../routes/work");

app.use("/api/", route);

module.exports = app;
