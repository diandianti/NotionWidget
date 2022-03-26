var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/work', function(req, res) {
  if (req.query.time !== undefined) {
    var h = req.query.time.slice(0,2);
    var m = req.query.time.slice(2,4);
    res.render('countdown', { hour: h , minutes: m});
  } else {
    res.render('countdown', { hour: "18" , minutes: "0" });
  }

});

module.exports = router;
