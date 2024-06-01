const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [String],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Education = mongoose.model('Education', educationSchema);
module.exports = Education;
