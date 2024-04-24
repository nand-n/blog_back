const express = require('express');

const songRoute = require('./song.route');
const blogRoute = require('./blog.route')
const noteRoute = require('./note.route')
const performanceRoute = require('./performance.route')
const catagoryRoute = require('./catagory.route')
const projectRoute = require('./project.route')
const financeRoute= require('./finance.route')
const conversationRoute = require('./conversation.route')
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
  },
  {
    path: '/catagory',
    route: catagoryRoute,
  },
  {
    path: '/project',
    route: projectRoute,
  },
  {
    path: '/finance',
    route: financeRoute,
  },
  {
    path: '/conversation',
    route: conversationRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
