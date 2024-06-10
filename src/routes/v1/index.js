const express = require('express');

const songRoute = require('./song.route');
const blogRoute = require('./blog.route')
const noteRoute = require('./note.route')
const performanceRoute = require('./performance.route')
const catagoryRoute = require('./catagory.route')
const projectRoute = require('./project.route')
const financeRoute= require('./finance.route')
const conversationRoute = require('./conversation.route')
const goalRoute = require('./goal.route')
const bussinessPlanRoute = require('./bussnessPlan.route')
const tasksRoute= require('./tasks.route')
const imageUpload = require('./imageUpload.route')
const mindMapRoute = require('./mindMapRoute.route')
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
  },
  {
    path: '/goal',
    route: goalRoute,
  }
  ,
  {
    path: '/bussinessPlan',
    route: bussinessPlanRoute,
  },
  {
    path: '/tasks',
    route: tasksRoute,
  },
  {
    path:'/upload-image',
    route: imageUpload
  }
  ,
  {
    path:'/mindmaps',
    route: mindMapRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
