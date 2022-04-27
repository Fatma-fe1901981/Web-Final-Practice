import mongoose from 'mongoose'

const Schema = mongoose.Schema
const contactSchema = new Schema({
    name : {
        type: String,
        required: [true, 'Contact Name is a mandatory field.']
    },

    gender: {
        type: String,
        required: [true, 'Gender is a mandatory field.'],
        enum: ['Male', 'Female']
    },

    age: {
        type: Number,
        required: [true, 'Age is a mandatory field.'],
        min: [5, 'Minimum age is 5 years old.'],
    },

    dob: {
        type: Date,
        required: [true, 'Date of Birth is a mandatory field.']
    }
})

export default mongoose.model('Contact', contactSchema)