const transporter = require('../utils/nodemailerConfig');

exports.sendHelpQuery = (req, res) => {
  const { firstName, lastName, email, topic, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.HELPLINE_EMAIL,
    subject: `Help query regarding ${topic}`,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: 'Email sent: ' + info.response });
  });
};
