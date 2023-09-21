const moment = require('moment');

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const reactionSchema = require('./reaction');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => {
      return moment(timestamp).format('h:mm A, M/D/YY');
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], 
});

module.exports = model('Thought', thoughtSchema);
