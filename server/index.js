const express = require('express');
const app = express();

require('dotenv').config();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT , () => {
    console.log("App listening on port" ,PORT)
})

const dbConnect = require('./config/database');
dbConnect();

app.get('/', (req , res) => {
    res.send("<h1>JOb Listing Is Working Fine</h1>")
})


// Health check route
app.get('/health', (req, res) => {
    const serverName = 'Job_Listing_Server';
    const currentTime = new Date().toLocaleTimeString();
    const serverState = 'active'; 
  
    const response = {
      serverName,
      currentTime,
      serverState,
    };
  
    res.json(response);
  });

