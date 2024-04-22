// const redis = require("redis");

// let client;

// const connectRedis = async () => {
//   client = redis.createClient({
//     socket: {
//       port: 6379,
//       host: 'redis-service'
//     }
//   });
//   client.on("error", (error) => console.error(`Error : ${error}`));
//   client.on("connect", () => console.log("Redis connected"));
//   await client.connect();
// };

// const getClient = () => {
//   if (!client) throw new Error("Redis client not initialized");
//   return client;
// };

// module.exports = { connectRedis, getClient };
