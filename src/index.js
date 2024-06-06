// index.js or server.js
const app = require('./app');
const logger = require('./config/logger');
const connectToMongoDB = require('./config/mongoDb');
const cloudinary = require('cloudinary').v2;
// const connectNeo4j = require('./config/neon4j');
// const redisConfig = require("./config/redis");
const redis = require('redis');


const startServer = async () => {
  try {
    await connectToMongoDB();
    // Connect to Neo4j
    // connectNeo4j()
    // .then(session => {
    //   console.error('Neo4j connection error:', error)
    // })
    // .catch(error => console.error('Neo4j connection error:', error));
    
    // redisConfig.connectRedis().catch(err => console.error("Redis connection error:", err));
      

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

