// controller.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(bodyParser.json());

// POST route to handle form submission
app.post('/message', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'tejasprotfolio12@gmail.com', // Your Gmail email address
        pass: 'Elgignnossq@21712', // Your Gmail password
      },
    });

    // Send mail with defined transport object
    await transporter.sendMail({
      from: email, // Sender's email address
      to: 'tejasrao712@gmail.com', // Your email address
      subject: 'New message from Portfolio', // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
    });

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = app;
