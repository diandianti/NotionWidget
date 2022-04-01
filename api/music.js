const app = require("../app");
const route = require("../routes/music");

app.use("/music/", route);

module.exports = app;