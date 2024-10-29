const nodemailer = require("nodemailer");

const sendFeedbackEmail = async (req, res) => {
  const { email, subject, message, scale } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Using environment variable
      pass: process.env.EMAIL_PASS, // Using environment variable
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.HELPLINE_EMAIL,
    subject: subject,
    text: `Message: ${message}\n\nRating: ${scale}\n\nFrom: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Feedback sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send feedback." });
  }
};

module.exports = {
  sendFeedbackEmail,
};
