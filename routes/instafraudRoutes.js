const express = require('express')
const Model = require('../models/instafraudModels')
const router = express.Router()

//post
router.post('/create', async (req, res) => {
    const data = new Model({
        picture: req.body.picture
    })

    try {
        const imageToSave = await data.save();
        res.status(200).json(imageToSave);

    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//get all
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
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
router.patch('/update/:id', async (req, res) =>{
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = {new: true};

        const result = await Model.findByIdAndUpdate(
            id, updateData, options
        )

        res.send(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//delete by id
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await Model.findByIdAndDelete(id)
        res.send("deleted")
    } catch (error) {
        
    }
})

module.exports = router;