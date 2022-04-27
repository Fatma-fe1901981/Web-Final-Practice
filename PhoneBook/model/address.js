import mongoose from 'mongoose'

const Schema = mongoose.Schema

const addressSchema = new Schema({
    city: {
        type: String,
        required: [true, 'City is a mandatory field.'],
    },

    houseNo: {
        type: Number,
        required: [true, 'House Number is a mandatory field.'],
        min: [0, 'Minimum House Number must be greater than or equal to 0'],
    },

    cid: {
        type: Schema.Types.ObjectId,
        rwff: 'Contact',
        required: [true, 'Contact ID is a mandatory field.']
    }
})

export default mongoose.model('Address', addressSchema)