import mongoose, { Document } from 'mongoose';
const Schema = mongoose.Schema


const projectSchema = new Schema({
    name: {type: String},
    class : {type : String},
    pr : {type : Number},
    img : {type : String}
})

const product = mongoose.model('products', projectSchema)
module.exports = product

export default product;


