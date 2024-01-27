// index.js or server.js
const app = require('./app');
const logger = require('./config/logger');
const connectToMongoDB = require('./config/mongoDb');

const startServer = async () => {
  try {
    await connectToMongoDB(); // Use the utility function to connect to MongoDB
    const server = app.listen(process.env.PORT, () => {
      logger.info(`Server is running on http://localhost:${process.env.PORT}`);
    });

    server.on('error', (error) => {
      logger.error(`Server error: ${error.message}`);
      process.exit(1);
    });
  } catch (error) {
    logger.error(`Server startup error: ${error.message}`);
    process.exit(1);
  }
};

startServer();

const exitHandler = () => {
  logger.info('Exiting...');
  process.exit(0);
};

const unexpectedErrorHandler = (error) => {
  logger.error(error.message);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  exitHandler();
});