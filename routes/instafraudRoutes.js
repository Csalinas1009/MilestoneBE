const express = require('express')
const upload = require('../middleware/upload')
const {uploadToCloudinary} = require('../services/cloudinary')
const router = new express.Router()
import Image from '../models/instafraudModels'


//upload to cloudinary
router.post("/image", upload.single("picture", async (req, res) => {
    try {
        const data = await uploadToCloudinary(req.file.path, "instafraud");
        const savedImg = await Image.updateOne(
            {_id: req.params.id},
            {
                $set: {
                    imageUrl: data.url,
                    publicId: data.public_id,
                }
            }
        )
        res.status(200).send('upload complete')
    } catch (error) {
        res.status(404).send(error)
    }
}))


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