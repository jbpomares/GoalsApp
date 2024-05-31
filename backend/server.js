const express = require('express');
const cors = require('cors');

const searchController = require('/Users/dilkaur/Desktop/Financial App/MicroserviceA/searchController.js')

const app = express();

// Run Microservice A on Port 5001
const port = process.env.PORT || 5001;

// Enable CORS for all routes so microservice can be used by teammate
app.use(cors());
app.use(express.json());

// HTTP Request location: 'http://localhost:5001/search'

// Route for searching goals by name and amount
app.get('/goals/search', searchController.searchGoals);

app.listen(port, () => {
    console.log(`Microservice A (Search Feature) is running on port ${port}`);
});