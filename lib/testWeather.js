const UID = "U785B76FC9"; // 测试用 用户ID，请更换成您自己的用户ID
const KEY = "4r9bergjetiv1tsd"; // 测试用 key，请更换成您自己的 Key
var LOCATION = "Beijing"; // 除拼音外，还可以使用 v3 id、汉语等形式

var weatherApi = require('./weather.js')
var argv = require('optimist').default('l', LOCATION).argv;


var api = new weatherApi(UID, KEY);
// api.getWeatherNow(argv.l).then(function(data) {
//     console.log(data.results);
//   console.log(JSON.stringify(data, null, 4));
// }).catch(function(err) {
//   console.log(err.error.status);
// });

let res;
api.getWeatherNow(argv.l).then((data)=> {
    console.log(data.results);
    console.log(data.results[0].daily);
    res = data.results;
});
console.log(res);
