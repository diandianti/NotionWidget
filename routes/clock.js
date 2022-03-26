var express = require('express');
var router = express.Router();

router.get("/clock", async (req, res) => {
    try {
      if (req.query.type === "orange") {
        res.render('orange-clock');
      } else {
          res.render('d-clock');
      }

    } catch (error) {
      console.error(error);
      return res.status(500).send("Server error");
    }
  });

module.exports = router;
