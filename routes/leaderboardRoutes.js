const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

router.get('/', leaderboardController.getLeaderboard);
router.get('/top', leaderboardController.getTopPlayers);
router.post('/submit-score', leaderboardController.submitScore);

module.exports = router;
