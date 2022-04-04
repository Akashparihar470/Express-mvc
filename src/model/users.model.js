const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        id: { type: Number, required: true },

        last_name: { type: String, required: true },
        gender: { type: String, required: true },
        date_birth: { type: String, required: true },


    }
    , {
        versionKey: false,
        timestamps: true
    }
)

const User = mongoose.model("user", UserSchema)
module.exports = User