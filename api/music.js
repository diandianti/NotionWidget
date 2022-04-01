const app = require("../app");
const route = require("../routes/music");

app.use("/api/", route);

module.exports = app;