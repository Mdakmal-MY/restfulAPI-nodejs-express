const mongoose = require('mongoose');

const PostSchema =  mongoose.Schema({
    title: {
        type: String,
        require: true
    }, 
    desciption:  {
        type: String,
        require: false
    },
    date:  {
        type: Date,
        default: Date.now,
        require: true
    }
})

module.export = mongoose.model('Posts', PostSchema);