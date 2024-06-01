const mongoose = require('mongoose');
const dbConfig = require('../dbConfig');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(dbConfig.mongodb.url, dbConfig.mongodb.options);
    console.log('Connected to MongoDB database');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB database');
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

module.exports = connectToMongoDB;
