import React, { useState } from 'react';
import SearchGoals from './searchgoals';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <h1>Goals Dashboard</h1>
      <SearchGoals onSearchResults={setSearchResults} />
      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map(goal => (
              <li key={goal._id}>
                <h3>{goal.name}</h3>
                <p>Target Date: {goal.date}</p>
                <p>Amount: {goal.amount}</p>
                <p>Current: {goal.current}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No goals found</p>
        )}
      </div>
    </div>
  );
};

export default App;
