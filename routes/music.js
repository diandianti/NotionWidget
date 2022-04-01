var express = require('express');
var router = express.Router();

function isEmptyObject(obj){
    for (var n in obj) {
        return false
    }
    return true;
}

router.get("/music", async(req, res) => {
    try {
        var autourl = req.query.url || undefined;
        if (req.query.url) {
            res.render('music', {main: {auto: req.query.url}});
        } else if (!isEmptyObject(req.query)) {
            res.render('music', {main: {args: req.query}});
        } else {
            res.render('music');
        }

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;