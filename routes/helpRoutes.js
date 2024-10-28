const express = require('express');
const { sendHelpQuery } = require('../controllers/helpController');
const router = express.Router();

router.post('/send-query', sendHelpQuery);

module.exports = router;
