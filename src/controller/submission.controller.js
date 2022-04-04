const express = require("express")
const router = express.Router()
const Submission = require("../model/submission.model")
router.post("", async (req, res) => {  
    try {
        const submission = await Submission.create(req.body)
        return res.status(201).send(submission)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})
router.get("/evalutin_gave", async (req, res) => { // to find all students who gave evalution
    try {
        const student = await Submission.find().lean().exec()
        student.map((ele) => {
            if (ele.marks > 0) {
                console.log('ele', ele);
            }
        })
        return res.status(201).send(student)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})
let max = 0
router.get("/high_marks", async (req, res) => { // to find all students who gave evalution
    try {
        const student = await Submission.find().lean().exec()
        student.map((ele) => {
           const res = Math.max(ele.marks)
           console.log('res', res);
         if(res > max){
            max = ele.marks
         }
        })
        const students = await Submission.findOne({marks:max}).lean().exec()
        console.log('students', students);
        return res.status(201).send(students)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})
router.get("", async (req, res) => { 
    try {
        const submission = await Submission.find().lean().exec()
        console.log(submission)
        return res.status(201).send(submission)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})
module.exports = router