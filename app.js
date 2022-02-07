const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const app = express();

//midlewate
app.use(cors());
app.use(bodyParser.json());

const  postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('we are at home');
})

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connect to db');
})



app.listen(3000);