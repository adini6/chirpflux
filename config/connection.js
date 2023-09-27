// Importing dotenv to load environment variables
require('dotenv').config();

// Importing mongoose to interact with MongoDB
const mongoose = require('mongoose');

// Creating a connection object to manage the state of the connection to the database
const db = mongoose.connection;

// Connecting to MongoDB using the connection URI provided in the environment variables
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true, // Using the new URL string parser instead of the deprecated one
  useUnifiedTopology: true, // Using the unified topology API
});

// Event listener to log when the connection to MongoDB is established
db.on('connected', () => {});

// Event listener to log any errors that occur while trying to connect to MongoDB
db.on('error', (err) => {});

// Event listener to log when the connection to MongoDB is terminated
db.on('disconnected', () => {});

// Exporting the connection object to be used in other parts of the application
module.exports = db;
