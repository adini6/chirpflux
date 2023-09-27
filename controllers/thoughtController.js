// Importing Thought and User models from the models directory
const { Thought, User } = require('../models');

// Defining thoughtController object to hold all the methods related to Thought operations
const thoughtController = {
  
    // Method to retrieve all thoughts
    async getAllThoughts(req, res) {
        try {
            // Finding all thoughts in the database and responding with the results
            const thoughts = await Thought.find({});
            res.json(thoughts);
        } catch (err) {
            // Responding with error details if an error occurs
            res.status(500).json(err);
        }
    },
    
    // Method to retrieve a single thought by ID
    async getSingleThought(req, res) {
        try {
            // Finding one thought by ID and responding with the result
            const thought = await Thought.findById(req.params.thoughtId);
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        } catch (err) {
            // Responding with error details if an error occurs
            res.status(500).json(err);
        }
    },
    
    // Method to create a new thought
    async createThought(req, res) {
        try {
            // Creating a new thought with received body and responding with the created thought
            const thought = await Thought.create(req.body);
            // Updating the user's thoughts array with the ID of the newly created thought
            await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } }, { new: true });
            res.json(thought);
        } catch (err) {
            // Responding with error details if an error occurs
            res.status(400).json(err);
        }
    },
    
    // Method to update a thought by ID
    async updateThought(req, res) {
        try {
            // Updating thought by ID with received body and responding with the updated thought
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        } catch (err) {
            // Responding with error details if an error occurs
            res.status(500).json(err);
        }
    },
    
    // Method to delete a thought by ID
    async deleteThought(req, res) {
        try {
            // Deleting thought by ID and responding with a confirmation message
            const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            // Removing the thought ID from the user's thoughts array
            await User.findByIdAndUpdate(thought.userId, { $pull: { thoughts: thought._id } }, { new: true });
            res.json({ message: 'Thought deleted' });
        } catch (err) {
            // Responding with error details if an error occurs
            res.status(500).json(err);
        }
    },
    
    // Method to add a reaction to a thought's reactions array
    async addReaction(req, res) {
        try {
            // Updating the thought's reactions array with received body and responding with the updated thought
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        } catch (err) {
            // Responding with error details if an error occurs
            res.status(500).json(err);
        }
    },
    
    // Method to remove a reaction from a thought's reactions array by reactionId
    async removeReaction(req, res) {
        try {
            // Updating the thought's reactions array by removing the reaction with the specified reactionId
            // and responding with the updated thought
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        } catch (err) {
            // Responding with error details if an error occurs
            res.status(500).json(err);
        }
    }
};

// Exporting the thoughtController object to be used in other parts of the application
module.exports = thoughtController;
