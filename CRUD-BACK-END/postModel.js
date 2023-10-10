const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    message: String,
});

const Contact = mongoose.model('Contact', contactSchema);
