const express = require('express');
const path = require('path');

// it parses request body, when you submit a form you can grab the data
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


// connect to database 
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', () => {
  console.log("connected to database " +config.database);
});

// error
mongoose.connection.on('error', (err) => {
  console.log("Database erro: " +err);
});

const app = express();
const users = require('./routes/nRoute');

const port = 3000;

app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname + '/public')));

// body parser middleware
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/users', users);


// index route
app.get('/', (req, res) => {
  res.send("hello kosh");
});

//start server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
