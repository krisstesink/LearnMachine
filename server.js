const express = require('express');
const axios = require('axios');
const fetch = require('node-fetch');
const path = require('path');
const { createUser, getUsers, createTable, addEntry } = require('./src/queries.js');


const app = express();
const port = 3000;

const clientPingTimestamps = {};
const clientFirstPingTimestamps = {};

app.use(express.json());

app.get('/', (req, res) => {
    createTable();
    res.sendFile('./public/index.html', { root: __dirname }); // Send to login
});

app.get('/postSurvey', (req, res) => {
    const code = req.query.code;
    const q0 = req.query.q0; 
    const q1 = req.query.q1; 

    addSurvey(code, q0, q1);
});

app.get('/post', (req, res) => {
  const code = req.query.code; 
  const q0 = req.query.q0; 
  const q1 = req.query.q1; 
  const q2 = req.query.q2;
  const q3 = req.query.q3; 
  const q4 = req.query.q4; 
  const q5 = req.query.q5; 
  const q6 = req.query.q6;
  const q7 = req.query.q7; 
  const q8 = req.query.q8; 
  const q9 = req.query.q9; 
  const q10 = req.query.q10;
  const q11 = req.query.q11; 
  const q12 = req.query.q12; 
  const q13 = req.query.q13; 
  const q14 = req.query.q14;
  const q15 = req.query.q15; 
  const q16 = req.query.q16; 
  const q17 = req.query.q17; 
  const q18 = req.query.q18;

  addEntry(code, [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18]);
});


app.use('/ping', (req, res, next) => {
  const clientId = req.query.clientId; // Assuming you include a unique client identifier in the ping request
  if(clientFirstPingTimestamps[clientId] == null) {
    clientFirstPingTimestamps[clientId] = Date.now();
  }
  clientPingTimestamps[clientId] = Date.now();
  next();
});

// Check for inactive clients every minute
setInterval(() => {
  const currentTime = Date.now();

  // Iterate through stored client timestamps
  Object.keys(clientPingTimestamps).forEach(clientId => {
    const lastPingTime = clientPingTimestamps[clientId];
    const timeSinceLastPing = currentTime - lastPingTime;
    const timeSinceLogin = lastPingTime - clientFirstPingTimestamps[clientId];

    // Check if the client has exceeded the expected ping interval
    if (timeSinceLastPing > 10000) {
      // Perform an action based on the inactive client
      addHours(clientId, timeSinceLogin/(1000 * 60 * 60))

      // Optionally, remove the client from the timestamps data structure
      delete clientPingTimestamps[clientId];
      delete clientFirstPingTimestamps[clientId];
    }
  });
}, 60000);

app.get('/styles.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css'); // Set content type to 'text/css'
  res.sendFile('./public/styles.css');
});

app.get('/*.html', (req, res) => {
    let fileName = req.params[0]; // Extract the filename from the URL
    fileName = path.join(__dirname, 'public', fileName + '.html'); // Append the '.html' extension
    res.type('text/html');
    res.sendFile(fileName);
});

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));


app.get('/:filename', (req, res) => {
  // Get the filename from the route parameter
  const filename = req.params.filename;
  // Construct the relative path to the JavaScript file in the public folder
  const filePath = path.join(__dirname, 'public', filename);

  // Determine the Content-Type based on the file extension
  let contentType = 'application/javascript';

  // Set the Content-Type header
  res.setHeader('Content-Type', contentType);

  // Send the JavaScript file
  res.sendFile(filePath);
});


app.listen(port, () => {
  console.log(`Node.js server listening at http://localhost:${port}`);
});
