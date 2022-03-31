const prefixPath = "/svg/";
const suffixName = ".svg";

svgLists = [
    prefixPath + "clear-day" + suffixName, //0 sunny
    prefixPath + "clear-night" + suffixName, //1 clear
    prefixPath + "clear-day" + suffixName, //2
    prefixPath + "clear-night" + suffixName, //3
    prefixPath + "cloudy" + suffixName, //4	多云	Cloudy
    prefixPath + "overcast-day" + suffixName, //5	晴间多云	Partly Cloudy
    prefixPath + "overcast-night" + suffixName, //6	晴间多云	Partly Cloudy
    prefixPath + "overcast" + suffixName, //7	大部多云	Mostly Cloudy
    prefixPath + "overcast" + suffixName, //8	大部多云	Mostly Cloudy
    prefixPath + "overcast" + suffixName, //9	阴	Overcast
    prefixPath + "dizzle" + suffixName, //10	阵雨	Shower
    prefixPath + "thunderstorms-rain" + suffixName, //11	雷阵雨	Thundershower
    prefixPath + "hail" + suffixName, //12	雷阵雨伴有冰雹	Thundershower with Hail
    prefixPath + "rain" + suffixName, //13	小雨	Light Rain
    prefixPath + "rain" + suffixName, //14	中雨	Moderate Rain
    prefixPath + "rain" + suffixName, //15	大雨	Heavy Rain
    prefixPath + "rain" + suffixName, //16	暴雨	Storm
    prefixPath + "rain" + suffixName, //17	大暴雨	Heavy Storm
    prefixPath + "rain" + suffixName, //18	特大暴雨	Severe Storm
    prefixPath + "hail" + suffixName, //19	冻雨	Ice Rain
    prefixPath + "sleet" + suffixName, //20	雨夹雪	Sleet
    prefixPath + "partly-cloudy-day-snow" + suffixName, //21	阵雪	Snow Flurry
    prefixPath + "snow" + suffixName, //22	小雪	Light Snow
    prefixPath + "snow" + suffixName, //23	中雪	Moderate Snow
    prefixPath + "snow" + suffixName, //24	大雪	Heavy Snow
    prefixPath + "snow" + suffixName, //25	暴雪	Snowstorm
    prefixPath + "dust" + suffixName, //26	浮尘	Dust
    prefixPath + "moon-full" + suffixName, //26	浮尘	Dust
]

function getSvg(code) {
    if (code >= svgLists.length) {
        return svgLists[25];
    } else {
        return svgLists[code];
    }
}


module.exports.svgList = svgLists;
module.exports.getSvg = getSvg;