const mongoose = require('mongoose');

const leaderboardEntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  rank: {
    type: Number,
  },
});

const LeaderboardEntry = mongoose.model(
  'LeaderboardEntry',
  leaderboardEntrySchema
);
module.exports = LeaderboardEntry;
