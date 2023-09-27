// Importing User and Thought models
const { User, Thought } = require('../models');

// Defining userController object to hold all the methods related to User operations
const userController = {

    // Method to handle getting all users
    async getAllUsers(req, res) {
        try {
            // Finding all users and populating thoughts and friends before sending the response
            const users = await User.find({}).populate('thoughts').populate('friends');
            res.json(users);
        } catch (err) {
            // Sending error response in case of any errors
            res.status(500).json(err);
        }
    },

    // Method to handle getting a user by ID
    async getUserById(req, res) {
        try {
            // Finding user by ID and populating thoughts and friends before sending the response
            const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            // Sending error response in case of any errors
            res.status(500).json(err);
        }
    },

    // Method to handle creating a new user
    async createUser(req, res) {
        try {
            // Creating new user with the received body and sending the user as response
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            // Sending error response in case of any errors
            res.status(400).json(err);
        }
    },

    // Method to handle updating a user by ID
    async updateUser(req, res) {
        try {
            // Updating the user by ID with the received body and sending the updated user as response
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            // Sending error response in case of any errors
            res.status(500).json(err);
        }
    },

    // Method to handle deleting a user by ID
    async deleteUser(req, res) {
        try {
            // Deleting the user by ID and sending a confirmation message as response
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            // Deleting all thoughts related to the user
            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User deleted' });
        } catch (err) {
            // Sending error response in case of any errors
            res.status(500).json(err);
        }
    },

    // Method to handle adding a friend to a user's friend list
    async addFriend(req, res) {
        try {
            // Updating the user's friend list by adding the friend ID and sending the updated user as response
            const user = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            // Sending error response in case of any errors
            res.status(500).json(err);
        }
    },

    // Method to handle removing a friend from a user's friend list
    async removeFriend(req, res) {
        try {
            // Updating the user's friend list by removing the friend ID and sending the updated user as response
            const user = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(user);
        } catch (err) {
            // Sending error response in case of any errors
            res.status(500).json(err);
        }
    }
};

// Exporting the userController object to be used in other parts of the application
module.exports = userController;
