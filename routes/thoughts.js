// Importing Router from express to create modular, mountable route handlers
const router = require('express').Router();

// Importing controller methods from thoughtController
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../controllers/thoughtController');

// Registering route to handle GET requests to fetch all thoughts
router.get('/', getAllThoughts);

// Registering route with dynamic segment (:thoughtId) to handle specific thought operations
router.route('/:thoughtId')
    // GET request to fetch a single thought by thoughtId
    .get(getSingleThought)
    // PUT request to update a thought by thoughtId
    .put(updateThought)
    // DELETE request to remove a thought by thoughtId
    .delete(deleteThought);

// Registering route to handle POST requests to create a new thought
router.post('/', createThought);

// Registering nested route with dynamic segment (:thoughtId) to handle reaction operations on a specific thought
router.route('/:thoughtId/reaction')
    // POST request to create a reaction stored in a single thought's reactions array field
    .post(addReaction);

// Registering nested route with two dynamic segments (:thoughtId and :reactionId) to handle specific reaction removal from a thought's reactions array field
router.delete('/:thoughtId/reaction/:reactionId', removeReaction);

// Exporting the router to be used in other parts of the application
module.exports = router;
