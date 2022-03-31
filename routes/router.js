const fs = require('fs');
const path = require('path');
const routes = require("express").Router();
const currentName = __filename.split('/').pop();

var allRoutes = [];
var allShows = {
    title: "Dev Server",
    bgimg: "https://api.btstu.cn/sjbz/api.php",
    wgs: []
};

//console.log(currentName);

fs.readdirSync(path.dirname(__filename)).forEach(file => {
    //console.log(file);
    if (file === currentName || file.split('.')[1] !== 'js') {
        return;
    }
    allRoutes.push(
        {
            name: file.split('.')[0],
            route: require('./' + file)
        }
    );
    allShows.wgs.push({
        href: "/" + file.split('.')[0],
        name: file 
    });
});

console.log(allRoutes);

routes.get("/dev", async function (req, res) {
  //homepage route returns some HTML
  res.render('dev', { main: allShows });
});


allRoutes.forEach(oneRoute => {
    routes.use('/', oneRoute.route);
});


module.exports = routes;

