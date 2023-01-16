const express = require('express')
const Model = require('../models/instafraudModels')
const router = express.Router()
const {uploadToCloudinary, removeFromCloudinary} = require('../services/cloudinary')
const upload = require('../middleware/upload')

//upload post
app.post('/upload', async (req, res) => {
    try {
      const newImage = new Image({
        imageUrl: req.body.imageUrl
      });
      await newImage.save();
      res.json(newImage.imageUrl);
    } catch (err) {
      console.error('Something went wrong', err);
    }
  });

//get all
router.get("/", async (req,res)=>{
    try{
        const pin = await Model.find();
        res.status(200).json(pin);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})

//get by id
router.get('/post/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//update by id
router.patch("/:id", async (req,res)=>{
    try{
        const pin = await Model.findByIdAndUpdate( req.params.id, req.body);
        res.status(200).json(pin);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})

//delete by id
router.delete("/:id", async (req,res)=>{
    try{
        const pin = await Model.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(pin);
    }catch(err){
        console.log(err)
        res.status(500).send('err')
    }
})

module.exports = router;