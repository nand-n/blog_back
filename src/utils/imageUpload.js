const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadImage = async (imageBase64) => {
  try {
    const result = await cloudinary.uploader.upload(imageBase64, { resource_type: "auto" });
    return result.secure_url;
  } catch (error) {
    return error;
  }
};

module.exports = {
  uploadImage,
};
