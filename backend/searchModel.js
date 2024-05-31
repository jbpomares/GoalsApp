// Model Layer that connects to MongoDB
require('dotenv').config();
const mongoose = require('mongoose');

// Use .env file to Connect to MongoDB via mongoose
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
);

const db = mongoose.connection;

// Message to verify that database is connected 
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// SCHEMA for "goals" collection 
const goalSchema = mongoose.Schema({
	name:       { type: String, required: true },
	date:     { type: Date, required: true, default: Date.now },
	amount:     { type: Number, required: true },
    current:     { type: Number, required: true }
});

// Define collection as "goals"
const goals = mongoose.model('Goal', goalSchema);

// Retieve goals by name and amount 
const fetchGoalsFromDatabase = async (name, amount) => {
    let query = goals.find();
    // If name is provided, add it to the query
    if (name) {
        query = query.where('name').equals(name);
    }
    // If amount is provided, add it to the query
    if (amount) {
        query = query.where('amount').equals(amount);
    }
    return query.exec();
}

module.exports = {fetchGoalsFromDatabase};