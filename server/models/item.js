const {Schema} = require('mongoose')

const itemSchema = new Schema({
    name: {
        required: true,
        type: String,
        maxlength: 100
    },
    price: {
        required: true,
        type: Number,
        maxlength: 255
    },
    images: {
        type: Array,
        default: []
    }
})

module.exports = itemSchema
