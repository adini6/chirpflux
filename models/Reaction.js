// Importing moment for formatting timestamps
const moment = require('moment');

// Importing necessary modules from mongoose to create the Reaction schema
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Defining the reactionSchema with the Schema constructor provided by Mongoose
const reactionSchema = new Schema({
  // Defining the reactionId field with a default value of a new ObjectId
  reactionId: {
    type: Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(), // Defaults to a new, unique ObjectId
  },
  // Defining the reactionBody field as a required string with a maximum length of 280
  reactionBody: {
    type: String,
    required: true, // This field is mandatory
    maxlength: 280, // Ensures the maximum length of the string
  },
  // Defining the username field as a required string to store who created this reaction
  username: {
    type: String,
    required: true, // This field is mandatory
  },
  // Defining the createdAt field to store the timestamp of when the reaction was created, and formatting it with moment
  createdAt: {
    type: Date,
    default: Date.now, // Default to the current timestamp
    get: (timestamp) => {
      // Formatting timestamp using moment
      return moment(timestamp).format('h:mm A, M/D/YY');
    },
  },
});

// Exporting the reactionSchema to be used in other parts of the application
module.exports = reactionSchema;
