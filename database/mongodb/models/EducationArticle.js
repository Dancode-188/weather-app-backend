const mongoose = require('mongoose');

const educationArticleSchema = new mongoose.Schema({
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
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const EducationArticle = mongoose.model(
  'EducationArticle',
  educationArticleSchema
);
module.exports = EducationArticle;
