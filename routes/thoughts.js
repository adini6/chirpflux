const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../controllers/thoughtController'); // Import the relevant controller

router.get('/', getThoughts);

router.get('/:thoughtId', getSingleThought);

router.post('/', createThought);

router.put('/:thoughtId', updateThought);

router.delete('/:thoughtId', deleteThought);

router.post('/:thoughtId/reactions', createReaction);

router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;
