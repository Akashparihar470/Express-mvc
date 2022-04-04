const mongoose = require("mongoose")
const submissionSchema = new mongoose.Schema(
    {
        evaluation_id: { type: String, required: true },
        student_id: { type: String, required: true },
        marks: { type: Number, required: true },


    },
    {
        versionKey: false,
        timestamps: true
    }
)
const Submission = mongoose.model("submission", submissionSchema)
module.exports = Submission