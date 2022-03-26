var express = require('express');
var router = express.Router();

router.get("/hitokoto", async (req, res) => {
    try {
      res.render('hitokoto', {imgurl: req.query.img});
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server error");
    }
  });

module.exports = router;