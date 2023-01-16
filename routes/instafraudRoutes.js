const express = require('express')
const Model = require('../models/instafraudModels')
const router = express.Router()

//post
router.post("/", async (req,res)=>{
    const newPost = new Model(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err)
    }
})

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