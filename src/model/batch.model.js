const mongoose = require("mongoose")

const BatchSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true },
        batch_name: { type: String, required: true },
    }
    , {
        versionKey: false,
        timestamps: true
    }

)

const Batch = mongoose.model("batch", BatchSchema)
module.exports = Batch