const { Pool } = require('pg');
const dbConfig = require('../dbConfig');

const pool = new Pool({
  connectionString: dbConfig.postgres.url,
  ...dbConfig.postgres.options,
});

pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('PostgreSQL connection error:', err);
  process.exit(1);
});

module.exports = pool;
