var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res) {
//   life = {year: 2000, month: 1, day: 1, long:90 }
//   res.render('bar', { life: life });
// });

function checkQuery(query) {
    if (query.birth !== undefined && query.long !== undefined) {
        var birth = query.birth;
        var long = query.long;
        if (query.birth.length === 8) {
            return {
                year: parseInt(birth.slice(0, 4)),
                month: parseInt(birth.slice(4,6)),
                day: parseInt(birth.slice(6,8)),
                long: parseInt(long)
            };
        }
    } else {
        return undefined;
    }
}


router.get("/bar", async (req, res) => {
    try {
      console.log(req.query);
      res.render('bar', { life: checkQuery(req.query) });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server error");
    }
  });

module.exports = router;
