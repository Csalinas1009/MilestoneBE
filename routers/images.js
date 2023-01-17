const express = require('express')
const upload = require('../middleware/upload')
const {uploadToCloudinary} = require('../services/cloudinary')
const router = new express.Router()

router.post('/image', upload.single("image"), async(req, res) => {
    try {
        const data = await uploadToCloudinary(req.file.path, "instafraud")
        const savedImg = await Image.updateOne(
            {_id: req.params.id},
            {
                $set: {
                    imageUrl: data.url,
                    pubclidId: data.public_id,
                }
            }
        )
        res.status(200).send("image uploaded")
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/", async (req,res)=>{
    try{
        const image = await Image.find();
        res.status(200).json(image);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})



module.exports = router