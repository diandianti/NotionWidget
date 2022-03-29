const app = require("../app");
const route = require("../routes/weather");

app.use("/api/", route);

module.exports = app;