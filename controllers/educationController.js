const EducationArticle = require('../models/educationModel');

const getArticles = async (req, res) => {
  try {
    const articles = await EducationArticle.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

const getArticleById = async (req, res) => {
  try {
    const article = await EducationArticle.findById(req.params.articleId);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Implement other education controller functions

module.exports = {
  getArticles,
  getArticleById,
  // Export other education controller functions
};
