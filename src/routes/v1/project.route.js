const express = require('express');
const { ProjectController } = require('../../controllers');
const upload = require('../../utils/fileUpload');

const router = express.Router();
router
    .route('/')
    .get(ProjectController.getAllProjects)
    .post(upload.single("image"), ProjectController.createProject );

router
    .route('/:id')
    .get(ProjectController.getProjectById)
    .patch(upload.single("image"),ProjectController.updateProject)
    .delete(ProjectController.deleteProject)
    


module.exports = router;

