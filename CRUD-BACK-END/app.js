const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoURI = 'mongodb+srv://SalimCH:SalimCH@cluster0.nu12cl7.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'; 

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    try {
        const newContact = new Contact({
            firstName,
            lastName,
            email,
            message,
        });

        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting contact form' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
