// Importing required modules
const express = require("express"); // Express to handle server creation and routing
const db = require("./config/connection"); // Database connection configuration
const routes = require("./routes"); // The API routes definition

// Creating an instance of an Express application
const app = express();

// Assigning port for the server to run on, defaulting to 3000 if not provided in the environment variables
const PORT = process.env.PORT || 3000;

// Adding middleware to parse the body of incoming JSON requests
app.use(express.json());

// Adding middleware to parse the body of incoming URL-encoded requests, where extended: true allows for the parsing of nested objects
app.use(express.urlencoded({ extended: true }));

// Registering the imported routes to the Express app instance
app.use('/api',routes);

// Event listener for MongoDB connection error, logs error to the console
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Event listener for successful MongoDB connection, starts the server on successful connection
db.once("open", () => {
  // Starting the Express server and listening on the assigned PORT
  app.listen(PORT, () => {
    // Logging to console the port the server is running on once it is live
    console.log(`API server running on port ${PORT}!`);
  });
}); 
