const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Quote = require('../models/Quote');
const { protect } = require('../middleware/authMiddleware');

// Initialize Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// @route   POST /api/quotes
// @desc    Submit a new machine quote request & send Email
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, company, email, phone, message, machineInterest } = req.body;

        // Validation
        if (!name || !company || !email || !phone) {
            return res.status(400).json({ error: 'Please provide all required fields.' });
        }

        // Save to MongoDB
        const newQuote = new Quote({ name, company, email, phone, message, machineInterest });
        const savedQuote = await newQuote.save();

        // Send Email Notification
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.NOTIFICATION_EMAIL,
            subject: `🚨 New Lead: ${machineInterest} - ${company}`,
            html: `
                <h2>New Quote Request Received</h2>
                <p><strong>Machine Interest:</strong> ${machineInterest}</p>
                <hr />
                <h3>Client Details:</h3>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Company:</strong> ${company}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>Email:</strong> ${email}</li>
                </ul>
                <h3>Additional Message:</h3>
                <p>${message || 'No additional requirements provided.'}</p>
            `
        });

        res.status(201).json({
            success: true,
            message: 'Quote request received and email sent',
            data: savedQuote
        });
    } catch (error) {
        console.error('Error processing quote:', error);
        res.status(500).json({ error: 'Server error. Could not process request.' });
    }
});

// @route   GET /api/quotes
// @desc    Get all quote requests (Admin only)
// @access  Private
router.get('/', protect, async (req, res) => {
    try {
        const quotes = await Quote.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: quotes.length,
            data: quotes
        });
    } catch (error) {
        console.error('Error fetching quotes:', error);
        res.status(500).json({ error: 'Server error. Could not fetch quotes.' });
    }
});

module.exports = router;