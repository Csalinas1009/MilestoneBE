const express = require('express')
const cloudinary = require('cloudinary');
const upload = require('../middleware/upload')
const router = new express.Router()
const Image = require("../models/instafraudModels")

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


//upload to cloudinary
app.post('/image', parser.single("image"), (req, res) => {
    console.log(req.file) // to see what is returned to you
    const image = {};
    image.url = req.file.url;
    image.id = req.file.public_id;
    Image.create(image) // save image information in database
        .then(newImage => res.json(newImage))
        .catch(err => console.log(err));
});


//get all
router.get("/", async (req, res) => {
    try {
        const data = await Image.find();
        res.status(200).json(data);
    } catch (err) {
        console.log(err)
        res.status(500).send('err')
    }
})




module.exports = router;