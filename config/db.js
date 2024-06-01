// db.js
const mongoose = require('mongoose');
const { Pool } = require('pg');
const { DB_CONFIG } = require('./secrets');

// MongoDB connection setup
const mongoConnect = () => {
  return mongoose.connect(DB_CONFIG.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// PostgreSQL connection pool setup
const postgresPool = new Pool({
  connectionString: DB_CONFIG.POSTGRES_URI,
});

module.exports = {
  mongoConnect,
  postgresPool,
};