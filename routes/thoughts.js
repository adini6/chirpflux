const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../controllers/thoughtController');
console.log(getThoughts);
console.log(getSingleThought);
console.log(createThought);
console.log(updateThought);
console.log(deleteThought);


router.get('/', getThoughts);
console.log(getSingleThought);

router.get('/:thoughtId', getSingleThought);

router.post('/', createThought);

router.put('/:thoughtId', updateThought);

router.delete('/:thoughtId', deleteThought);

router.post('/:thoughtId/reactions', createReaction);

router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;
