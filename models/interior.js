const mongoose = require("mongoose")
const Schema = mongoose.Schema

const interiorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    small: {
        type: String,
    },
    medium: {
        type: String,
    },
    big: {
        type: String,
    },
})
module.exports = mongoose.model("Interior", interiorSchema)