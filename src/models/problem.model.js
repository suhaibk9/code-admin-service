const mongoose = require('mongoose');
const { Schema } = mongoose;
const problemSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: [true, 'Difficulty is required'],
    default: 'easy',
  },
  tags: {
    type: Array,
    required: false,
  },
  testCases: [
    {
      input: {
        type: String,
        required: [true, 'Input is required'],
      },
      output: {
        type: String,
        required: [true, 'Output is required'],
      },
    },
  ],
  editorial: {
    type: String,
    required: false,
  },
});
const Problem = mongoose.model('Problem', problemSchema);
module.exports = Problem;

//testCases will look like this:[{input: "1 2", output: "3"},{input: "2 3", output: "5"}]
