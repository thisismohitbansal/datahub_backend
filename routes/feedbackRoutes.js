const express = require('express');
const { sendFeedbackEmail } = require('../controllers/feedbackController');
const router = express.Router();

router.post('/send-feedback', sendFeedbackEmail);

module.exports = router;
