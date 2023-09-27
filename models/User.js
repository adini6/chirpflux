// Importing Schema and model from mongoose to create the User model
const { Schema, model } = require('mongoose');

// Defining the UserSchema with the Schema constructor provided by Mongoose
const UserSchema = new Schema({
    // Defining the username field as a unique, trimmed string
    username: {
        type: String,
        unique: true, // Ensures the username is unique in the collection
        required: true, // This field is mandatory
        trim: true // Removes any whitespace before saving the username
    },
    // Defining the email field with validation to ensure the format is correct
    email: {
        type: String,
        required: true, // This field is mandatory
        unique: true, // Ensures the email is unique in the collection
        match: [/.+@.+\..+/, 'Must match a valid email address'] // Validates email format
    },
    // Associating the User with Thoughts using the ObjectId type, creating a reference to the Thought model
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    // Creating a self-reference to associate friends with the User using the ObjectId type
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

// Creating a virtual to dynamically retrieve the length of the user's friends array field on query
UserSchema.virtual('friendCount').get(function() {
    // Returns the length of the friends array
    return this.friends.length;
});

// Exporting the User model to be used in other parts of the application
module.exports = model('User', UserSchema);
