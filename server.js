const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration for Zoho
// Credentials are loaded from environment variables (.env file)
// Your password is NEVER stored in the code - it's only in your .env file
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD
  }
});

// Email sending endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, family, focus, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please fill in all required fields.' 
    });
  }

  // Email content
  const mailOptions = {
    from: '"BaQui Advisory Website" <info@baquiadvisory.com>',
    to: 'info@baquiadvisory.com',
    subject: `New Contact Request from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7cc3ff; border-bottom: 2px solid #7cc3ff; padding-bottom: 10px;">
          New Contact Request - BaQui Advisory
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 140px;">
              Name:
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">
              ${name}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">
              Email:
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">
              <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">
              Family/Entity:
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">
              ${family || 'Not provided'}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">
              Focus Area:
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">
              ${focus || 'Not provided'}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; vertical-align: top;">
              Message:
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </td>
          </tr>
        </table>

        <div style="margin-top: 30px; padding: 15px; background: #f5f7fb; border-radius: 8px; font-size: 12px; color: #666;">
          <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully from:', email);
    
    res.json({ 
      success: true, 
      message: 'Thank you! Your message has been received. A member of our team will be in touch shortly.' 
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ 
      success: false, 
      message: 'There was a problem sending your message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Contact form endpoint: POST /api/contact');
});

