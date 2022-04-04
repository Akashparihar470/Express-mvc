const express = require("express")

const router = express.Router()
const evaluation =require("../model/evaluation.model")



router.post("", async (req, res)=>{ 
    try {

    const evaluation =await evaluation.create(req.body)
    return res.status(201).send(evaluation)
    }
    catch (err) {
    return res.status(500).send(err.message)

    }
})


router.get("", async (req, res)=>{ 
    try {

    const evaluation = await evaluation.find().lean().exec()
    return res.status(201).send(evaluation)
    }
    catch (err) {
    return res.status(500).send(err.message)

    }
})




module.exports= router