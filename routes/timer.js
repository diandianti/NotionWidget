var express = require('express');
var router = express.Router();

router.get("/timer", async(req, res) => {
    try {
        res.render('timer');
    } catch (error) {
        // console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;