const app = require('./app');
const connectToMongoDB = require('./utils/mongoose');
const logger = require('./config/logger');
let server;

const startServer = async () => {
  try {
    await connectToMongoDB(); // Use the utility function to connect to MongoDB
    server = app.listen(process.env.PORT, () => {
      logger.info(`Server is running on http://localhost:${process.env.PORT}`);
    });

    server.on('error', (error) => {
      logger.error(`Server error: ${error}`);
      process.exit(1); // Exit the process in case of server error
    });
  } catch (error) {
    logger.error(`Server startup error: ${error}`);
    process.exit(1); // Exit the process in case of MongoDB connection error
  }
};

startServer();

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});