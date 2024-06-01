// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { mongoConnect, postgresPool } = require('./config/db');
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const socialRoutes = require('./routes/socialRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const educationRoutes = require('./routes/educationRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

// Application settings and environment variables
app.set('port', config.PORT);
app.set('env', config.ENV);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

// Initialize database connections
mongoConnect()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  });

postgresPool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err);
    process.exit(1);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/weather', weatherRoutes);
app.use('/social', socialRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/education', educationRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Uncaught exception handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

// Unhandled promise rejection handling
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason);
  process.exit(1);
});

module.exports = app;