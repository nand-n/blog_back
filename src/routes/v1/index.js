const express = require('express');

const songRoute = require('./song.route');
const blogRoute = require('./blog.route')
const noteRoute = require('./note.route')
const performanceRoute = require('./performance.route')



const router = express.Router();

const defaultRoutes = [
  {
    path: '/song',
    route: songRoute,
  },
  {
    path: '/blogs',
    route: blogRoute,
  },
  {
    path: '/notes',
    route: noteRoute,
  },
  {
    path: '/performance',
    route: performanceRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
