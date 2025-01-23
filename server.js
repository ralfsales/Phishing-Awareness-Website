const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Serve frontend files (assuming your HTML files are in the 'frontend' folder)
app.use(express.static('../frontend'));

// Handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form Data:', { name, email, message });
    res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
