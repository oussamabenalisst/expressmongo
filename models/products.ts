import mongoose, { Document } from 'mongoose';
import { float } from 'webidl-conversions';
const Schema = mongoose.Schema


const projectSchema = new Schema({
    name: { type: String },
    class : {type : String},
    pr : {type : float},
    img : {type : String}
})

const product = mongoose.model('Product', projectSchema)
module.exports = product

