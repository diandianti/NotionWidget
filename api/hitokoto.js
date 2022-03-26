const app = require("../app");
const route = require("../routes/hitokoto");

app.use("/api/", route);

module.exports = app;
