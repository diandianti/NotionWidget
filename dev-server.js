const app = require("./app");
const routes = require("./routes/router");
const express = require('express')
var path = require('path');


app.use("/", express.static(path.join(__dirname, 'public')));
app.use("/", routes);
/* app.use("/api/", routes);  //for API backend*/

//start server locally
app.listen(3000,function () {
    console.log("Server started. Go to http://localhost:3000/");
});



