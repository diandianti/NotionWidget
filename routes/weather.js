var express = require('express');
var router = express.Router();
const weatherApi = require('../lib/weatherAPI');
const svgApi = require('../lib/weatherSVG');

UID = process.env.WUID || "U785B76FC9";
KEY = process.env.WKEY || "4r9bergjetiv1tsd";

//console.log(UID);
//console.log(KEY);

var api = new weatherApi(UID, KEY);

router.get("/weather", async(req, res) => {

    try {
        var cityName = req.query.city || "苏州";
        api.getWeatherNow(cityName).then((data) => {
            return data.results[0];
        }).then((nowdata) => {
            //console.log("get now data");
            //console.log(nowdata);

            api.getWeatherDaily(cityName).then((dailydata) => {
                //console.log("get daily data----------------------");
                //console.log(dailydata.results[0].daily);

                nowdata.now.temperature
                main = { city: cityName };

                main["day1"] = {
                    t: nowdata.now.temperature,
                    svg: svgApi.getSvg(nowdata.now.code)
                };

                main["day2"] = {
                    t: dailydata.results[0].daily[1].low + "-" + dailydata.results[0].daily[1].high,
                    svg: svgApi.getSvg(dailydata.results[0].daily[1].code_day)
                };
                main["day3"] = {
                    t: dailydata.results[0].daily[2].low + "-" + dailydata.results[0].daily[2].high,
                    svg: svgApi.getSvg(dailydata.results[0].daily[2].code_day)
                };

                //console.log(main);
                res.render("weather", { main: main });
            }).catch(err => {
                return res.status(500).send("Wrong City");
            })
        }).catch(err => {
                return res.status(500).send("Wrong City");
            }

        )

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;