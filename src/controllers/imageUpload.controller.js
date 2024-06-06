const catchAsync = require("../utils/catchAsync");
const { uploadImage } = require("../utils/imageUpload");
const uploadImagePost = catchAsync(async (req, res) => {
    const imageUrl = await uploadImage(req.body.image);
    res.json({ imageUrl });
  });


  module.exports = {
    uploadImagePost
  };