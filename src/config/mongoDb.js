// utils/mongoose.js
const mongoose = require('mongoose');
const logger = require('../config/logger');

const connectToMongoDB = async () => {
  try {

    await mongoose.connect(process.env.DATABASE_URL);
    logger.info('Connected to MongoDB through Mongoose');
  } catch (error) {
    logger.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectToMongoDB;