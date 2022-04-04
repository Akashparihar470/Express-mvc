const express = require("express")
const app = express()
const connect = require("./src/config/db")
const studentController = require("./src/controller/student.controller")
const batchController = require("./src/controller/batch.controller")
const userController = require("./src/controller/users.controller")
const evaluationController = require("./src/controller/evaluation.controller")
const submissionController = require("./src/controller/submission.controller")


app.use(express.json())

app.use("/students", studentController)
app.use("/batchs", batchController)
app.use("/users", userController)
app.use("/evaluations", evalutionController)
app.use("/submissions", submissionController)




app.listen(2400, async () => {
    try {
        await connect()
     
        console.log("Listening on port 2345")
    }
    catch (err) {
        console.log(err.message)
    }
})