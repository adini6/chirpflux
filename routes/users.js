// Importing the Router from express to create modular, mountable route handlers.
const router = require('express').Router();

// Destructuring the userController methods for easy access.
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../controllers/userController');

// Defining routes for the base endpoint ('/') with appropriate HTTP methods.
router.route('/')
  // GET request to get all users.
  .get(getAllUsers)
  // POST request to create a new user.
  .post(createUser);

// Defining routes with dynamic segments (:id) to handle specific user operations with appropriate HTTP methods.
router.route('/:id')
  // GET request to get a user by ID.
  .get(getUserById)
  // PUT request to update a user by ID.
  .put(updateUser)
  // DELETE request to delete a user by ID.
  .delete(deleteUser);

// Defining nested routes with dynamic segments (:userId and :friendId) to handle user friend operations with appropriate HTTP methods.
router.route('/:userId/friends/:friendId')
  // POST request to add a friend to a user's friend list by user ID and friend ID.
  .post(addFriend)
  // DELETE request to remove a friend from a user's friend list by user ID and friend ID.
  .delete(removeFriend);

// Exporting the router to be used in other parts of the application.
module.exports = router;
