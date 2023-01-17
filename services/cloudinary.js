const cloudinary = require('cloudinary')


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
    });
    const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "demo",
    allowedFormats: ["jpg", "png"],
    });
    const parser = multer({ storage: storage });

module.exports = { uploadToCloudinary, removeFromCloudinary }