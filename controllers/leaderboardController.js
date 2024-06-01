const LeaderboardEntry = require('../models/leaderboardModel');

const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await LeaderboardEntry.find()
      .sort({ score: -1 })
      .limit(10)
      .populate('user');
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Implement other leaderboard controller functions

module.exports = {
  getLeaderboard,
  // Export other leaderboard controller functions
};
