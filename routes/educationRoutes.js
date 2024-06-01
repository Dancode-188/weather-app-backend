const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

router.get('/articles', educationController.getArticles);
router.get('/articles/:articleId', educationController.getArticleById);
router.get('/quizzes', educationController.getQuizzes);
router.get('/quizzes/:quizId', educationController.getQuizById);

module.exports = router;
