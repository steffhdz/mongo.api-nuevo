const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type:String,
        requiered:true


    },
    publishingYear:{ 
        type:String,
        required:true
    }

})

module.exports=mongoose.model('Book',bookSchema)