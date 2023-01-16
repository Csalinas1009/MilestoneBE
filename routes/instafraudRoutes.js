const express = require('express')
const router = express.Router()
const {uploadToCloudinary, removeFromCloudinary} = require('../services/cloudinary')
const upload = require('../middleware/upload')
const Post = require('../models/instafraudModels')


//upload to cloudinary
router.post("/image"), upload.single("image"), async (req, res) => {
    try {
        const data = await uploadToCloudinary(req.file.path, "instafraud");
        const savedImg = await Post.updateOne(
            {_id: req.params.id},
            {
                $set: {
                    imageUrl: data.url,
                    publicId: data.public_id
                }
            }
        )
        res.status(200).send("upload success")
    } catch (error) {
        res.status(400)
    }
}


//get all
router.get("/", async (req,res)=>{
    try{
        const data = await Post.find();
        res.status(200).json(data);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})




module.exports = router;