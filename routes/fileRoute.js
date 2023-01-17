const express = require("express");
const fileController = require("../controllers/fileController")
const fileRouter = express.Router();
const multer  = require('multer')
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key: process.env.cloud_api_key, 
  api_secret: process.env.cloud_api_secret
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "DEV",
    allowedFormats: ['png', 'jpg', 'jpeg'],
    width: 250, height: 250, crop: "fill"
  },
});

const upload = multer({ storage: storage });

fileRouter.route("/upload").post(upload.single('image'), fileController.fileUpload);

module.exports = fileRouter;