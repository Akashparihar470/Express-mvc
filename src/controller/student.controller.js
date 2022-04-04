const express = require("express")

const router = express.Router()
const Student = require("../model/student.model")


router.post("", async (req, res) => {   

    try {
        const student = await Student.create(req.body)
        return res.status(201).send(student)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})



router.get("", async (req, res) => { 
    try {
        const student = await Student.find().populate("batch_id").lean().exec()
        console.log('student', student);

        return res.status(201).send(student)
    }
    catch (err) {
        return res.status(500).send(err.message)

    }
})



module.exports = router