export const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl;
  
    redisClient.get(key, (err, data) => {
      if (err) throw err;
  
      if (data !== null) {
        res.json(JSON.parse(data));
      } else {
        next();
      }
    });
  };