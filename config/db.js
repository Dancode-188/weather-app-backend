// db.js
const mongoose = require('mongoose');
const { Pool } = require('pg');

const mongoConnection = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const postgresPool = new Pool({
  connectionString: process.env.POSTGRES_URI,
});

module.exports = {
  mongoConnection,
  postgresPool,
};
