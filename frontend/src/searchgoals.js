import React, { useState } from 'react';

const SearchGoals = ({ onSearchResults }) => {
  // State to store the search query for goal name
  const [nameQuery, setNameQuery] = useState('');
  // State to store the search query for goal amount
  const [amountQuery, setAmountQuery] = useState('');

  // Function to handle the search action
  const handleSearch = async () => {
    try {
      // Make a GET request to the microservice with the search queries
      const response = await fetch(`http://localhost:5001/goals/search?name=${nameQuery}&amount=${amountQuery}`);
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Failed to search goals');
      }
      // Parse the response as JSON
      const results = await response.json();
      // Pass the search results to the parent component
      onSearchResults(results);
    } catch (error) {
      // Log any errors that occur during the search process
      console.error('Error searching goals:', error);
    }
  };

  return (
    <div>
      {/* Input field for entering the goal name search query */}
      <input 
        type="text" 
        value={nameQuery} 
        onChange={(e) => setNameQuery(e.target.value)} 
        placeholder="Search by goal name..." 
      />
      {/* Input field for entering the goal amount search query */}
      <input 
        type="number" 
        value={amountQuery} 
        onChange={(e) => setAmountQuery(e.target.value)} 
        placeholder="Search by amount..." 
      />
      {/* Button to trigger the search action */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchGoals;

