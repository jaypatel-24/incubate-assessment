const express = require('express');
const app = express();
const path = require('path')
const connectDB = require('./config/db')
connectDB();


// Init middleware
app.use(express.json({ extended : false }));

//Define the routes 
app.use('/', require('./routes/mainFile'));


const PORT = process.env.PORT || 5000;


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

app.listen(PORT, (req,res) => console.log(`Server is listening on port ${PORT}`));
