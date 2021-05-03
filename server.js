const express = require('express');
const app = express();

const connectDB = require('./config/db')
connectDB();

// Init middleware
app.use(express.json({ extended : false }));

//Define the routes 
app.use('/', require('./routes/mainFile'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req,res) => console.log(`Server is listening on port ${PORT}`));
