var express = require('express');
var router = express.Router();

router.get("/clock", async(req, res) => {
    try {
        if (req.query.type === "orange") {
            res.render('clock/orange-clock');
        } else if (req.query.type === "flip") {
            res.render('clock/flip-clock', { color: req.query.color });
        } else {
            res.render('clock/d-clock');
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;