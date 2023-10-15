const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/', controller.travel);
module.exports = router;