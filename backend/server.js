const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Placeholder function for retrieving goals from JSON file
async function fetchGoalsFromDatabase() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'data', 'goals.json'), 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

// Route handler for root URL
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Route handler for retrieving goals
app.get('/search', async (req, res) => {
    const searchTerm = req.query.query;
    try {
      const goals = await fetchGoalsFromDatabase();
      const filteredGoals = goals.filter(goal => goal.name.toLowerCase().includes(searchTerm.toLowerCase()));
      res.json(filteredGoals);
    } catch (error) {
      console.error('Error searching goals:', error); // Log the error
      res.status(500).json({ error: 'Failed to search goals' });
    }
  });

// Route handler for searching goals by name and amount
app.get('/goals/search', async (req, res) => {
  const searchTerm = req.query.name;
  const searchAmount = req.query.amount;
  try {
    const goals = await fetchGoalsFromDatabase();
    let filteredGoals = goals;
    if (searchTerm) {
      filteredGoals = filteredGoals.filter(goal => goal.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (searchAmount) {
      filteredGoals = filteredGoals.filter(goal => goal.amount === parseInt(searchAmount));
    }
    res.json(filteredGoals);
  } catch (error) {
    console.error('Error searching goals:', error);
    res.status(500).json({ error: 'Failed to search goals' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
