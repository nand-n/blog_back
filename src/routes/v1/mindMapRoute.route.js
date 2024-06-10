const express = require('express');
const { MindMapController } = require('../../controllers');
const upload = require('../../utils/fileUpload');

const router = express.Router();
router
    .route('/')
    .get(MindMapController.getAllMindmps)
    .post(MindMapController.createMindmap );

router
    .route('/:id')
    .get(MindMapController.getMindmapById)
    .patch(MindMapController.updateMindmap)
    .delete(MindMapController.deleteMindmap)
    


module.exports = router;

