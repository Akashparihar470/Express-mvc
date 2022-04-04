const mongoose = require("mongoose")
const StudentSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true },
        roll_number: { type: Number, required: true },
        current_batch: { type: String, required: true },
        user_id: { type: String, required: true },
        batch_id: { type: String, required: true },
        evalution_id: { type: String, required: true },



    },
    {
        versionKey: false,
        timestamps: true
    }
)
const Student = mongoose.model("student", StudentSchema)
module.exports = Student