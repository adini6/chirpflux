const { Schema, model } = require('mongoose');

const reactionSchema = (`./Reaction`);

const ThoughtSchema = new Schema(

        thoughtText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280
        },