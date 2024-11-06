const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/pizzaDeliveryDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

// Basic route
app.get('/', (req, res) => {
    res.send('Pizza Delivery App Backend');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
