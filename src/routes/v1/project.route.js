const express = require('express');
const { ProjectController } = require('../../controllers');
const upload = require('../../utils/fileUpload');

const router = express.Router();
router
    .route('/')
    .get(ProjectController.getAllProjects)
    .post(ProjectController.createProject );

router
    .route('/:id')
    .get(ProjectController.getProjectById)
    .patch(ProjectController.updateProject)
    .delete(ProjectController.deleteProject)
    


module.exports = router;

