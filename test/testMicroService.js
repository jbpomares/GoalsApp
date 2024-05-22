import fetch from 'node-fetch';

async function testMicroservice() {
  try {
    // Make a GET request to the microservice
    const response = await fetch('http://localhost:5001/goals/search?name=&amount=');

    // Log the raw response body
    const responseBody = await response.text();
    console.log('Response Body:', responseBody);

    // Parse the response as JSON
    const data = JSON.parse(responseBody);

    // Output the parsed data
    console.log('Parsed Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the testMicroservice function
testMicroservice();



