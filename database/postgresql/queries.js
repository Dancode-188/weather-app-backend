const pool = require('./connection');

// Example query functions
const createUser = async (username, email, password) => {
  const query =
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';
  const values = [username, email, password];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const getUserById = async (userId) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const values = [userId];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Add more query functions as needed

module.exports = {
  createUser,
  getUserById,
  // Export other query functions
};
