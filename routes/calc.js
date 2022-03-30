var express = require('express');
const { parse } = require('optimist');
var router = express.Router();

router.get("/calc", async(req, res) => {
    try {
        var typeInt = parseInt(req.query.type);
        if (typeInt <= 3 && typeInt >= 1) {
            res.render('calc/calc' + typeInt, { main: { user: req.query.user || "" } });
        } else {
            res.render('calc/calc3');
        }
    } catch (error) {
        // console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;