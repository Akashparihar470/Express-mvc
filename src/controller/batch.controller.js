const express = require("express")
const router = express.Router()
const Batch = require("../model/batch.model")
router.post("", async (req, res) => {  
    try {
        const batch = await Batch.create(req.body)
        return res.status(201).send(batch)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.get("", async (req, res) => { 
    try {
        const batch = await Batch.find().lean().exec()
        return res.status(200).send(batch)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})



module.exports = router