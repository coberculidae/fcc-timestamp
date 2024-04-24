const express = require('express');
const timeStamp = require('../controllers/timestamp.controller');
const router = express.Router();

router.route('/:date').get(timeStamp)

module.exports = router