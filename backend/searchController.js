const {fetchGoalsFromDatabase}  = require('./searchModel.js');


const searchGoals = async (req, res) => {
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
};

module.exports = {searchGoals}; 