This microservice is a backend application designed to manage goals data for a financial goals app. It provides endpoints for retrieving, searching, and 
filtering goals based on various criteria such as name and amount. The microservice interacts with a database to store and retrieve goals information. 
It is built using Node.js and Express.js framework, providing a RESTful API for communication.

### How to Programmatically REQUEST Data from the Microservice

To programmatically request data from the microservice, you need to make a GET request to the appropriate endpoint using a tool or library capable of making HTTP requests. 

## Example call using JavaScript and the Fetch API:
```
fetch('http://localhost:5001/goals')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### How to Programmatically RECEIVE Data from the Microservice

To programmatically receive data from the microservice, you need to set up endpoints on the microservice that respond to incoming requests. These endpoints should return the requested data in a format such as JSON.

Example endpoint on the microservice that returns a list of goals:
```
app.get('/goals', async (req, res) => {
  try {
    const goals = await fetchGoalsFromDatabase();
    res.json(goals);
  } catch (error) {
    console.error('Error fetching goals:', error);
    res.status(500).json({ error: 'Failed to fetch goals' });
  }
});
```

