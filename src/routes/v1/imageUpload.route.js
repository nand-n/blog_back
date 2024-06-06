const express = require('express');
const { ImageUploadController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(ImageUploadController.uploadImagePost);

module.exports = router;
