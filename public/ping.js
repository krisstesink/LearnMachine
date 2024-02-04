// Define a function to ping the client
function pingClient() {
  // Use fetch or another suitable method to send a request to the server
  fetch('/ping', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Add any additional headers as needed
    },
  })
  .then(response => {
    if (!response.ok) {
      console.error('Ping failed:', response.status, response.statusText);
    }
  })
  .catch(error => {
    console.error('Error during ping:', error);
  });
}

// Set up an interval to call the pingClient function every 10 seconds
const pingInterval = setInterval(pingClient, 10000);

