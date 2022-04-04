const mongoose = require("mongoose")

const evalutionSchema = new mongoose.Schema(
    {
        date_of_evaluation: { type: String, required: true },
        instructor: { type: String, required: true },
        batch_id: { type: String, required: true },

    }
    , {
        versionKey: false,
        timestamps: true
    }

)

const Evalution = mongoose.model("evalution", evalutionSchema)
module.exports = Evalution