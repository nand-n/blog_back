// utils/mongoose.js
const mongoose = require('mongoose');
const logger = require('../config/logger');

const connectToMongoDB = async () => {
  try {

    console.log(process.env.ENV ,"process.env.NODE_ENV");
    const baseDbUrl = process.env.ENV == "development" ?  process.env.DATABASE_URL_DEV : process.env.DATABASE_URL_PROD

    await mongoose.connect(baseDbUrl);
    logger.info('Connected to MongoDB through Mongoose');
  } catch (error) {
    logger.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectToMongoDB;