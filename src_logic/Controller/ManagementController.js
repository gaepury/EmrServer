

const express = require('express');
const { respondHtml } = require('../Utils/respond');
const router = express.Router();

router.use(function log(req, res, next) {
    console.log('## [Management] Management started ##');
    next();
});

router.get('/', (req, res, next) => {
    respondHtml(res, 'management');
})

module.exports = router;
