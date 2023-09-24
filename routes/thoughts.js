const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../controllers/thoughtController');
console.log(getAllThoughts);
console.log(getSingleThought);
console.log(createThought);
console.log(updateThought);
console.log(deleteThought);


router.get('/', getAllThoughts);
console.log(getSingleThought);

router.get('/:thoughtId', getSingleThought);

router.post('/', createThought);

router.put('/:thoughtId', updateThought);

router.delete('/:thoughtId', deleteThought);

router.post('/:thoughtId/reaction', addReaction);

router.delete('/:thoughtId/reaction/:reactionId', removeReaction);


module.exports = router;
