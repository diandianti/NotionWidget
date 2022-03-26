const app = require("../app");
const route = require("../routes/ans");

app.use("/api/", route);

module.exports = app;
