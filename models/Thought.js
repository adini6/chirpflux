// Importing moment for formatting timestamps
const moment = require('moment');

// Importing necessary modules from mongoose to create the Thought model
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Importing the reactionSchema for embedding in the Thought model
const reactionSchema = require('./reaction');

// Defining the thoughtSchema with the Schema constructor provided by Mongoose
const thoughtSchema = new Schema({
  // Defining the thoughtText field as a string with a minimum length of 1 and a maximum length of 280
  thoughtText: {
    type: String,
    required: true, // This field is mandatory
    minlength: 1,  // Ensures the minimum length of the string
    maxlength: 280, // Ensures the maximum length of the string
  },
  // Defining the createdAt field to store the timestamp of when the thought was created, and formatting it with moment
  createdAt: {
    type: Date,
    default: Date.now, // Default to the current timestamp
    get: (timestamp) => {
      // Formatting timestamp using moment
      return moment(timestamp).format('h:mm A, M/D/YY');
    },
  },
  // Defining the username field as a required string to store who created this thought
  username: {
    type: String,
    required: true, // This field is mandatory
  },
  // Embedding the reactions using the reactionSchema
  reactions: [reactionSchema], 
});

// Exporting the Thought model to be used in other parts of the application
module.exports = model('Thought', thoughtSchema);
