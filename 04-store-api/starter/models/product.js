const mongoose =require('mongoose')

const productSchema = new mongoose.Schema({
   name:{
    type:String,
    required:[true, 'prodcut name must be provided'],
   },
   price:{
    type:Number,
    required:[true,'produc price must be provided'],
   },
   featured: {
    type: Boolean,
    default: false,
   },
   rating: {
    type:Number,
    default: 4.5,
   },
   createdAt: {
    type: Date,
    default: Date.now(),
   },
   company:{
    type:String,
    enum:{
        values: ['ikea','liddy','caressa','marcos'],
        message:'{VALUE} is not supported',
    },
    //enum:['ikea','liddy','caress','marcos'],
   },
})
module.exports = mongoose.model('produt', productSchema)