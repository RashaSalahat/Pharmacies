const mongoose = require('mongoose');

var schema = new mongoose.Schema({  //to define a shape and content of the doc
    name : {
        type : String,
        required: true
    },
    address : {
        type: String,
        required: true,
    },
    status : String,
    duty: String
})

const Pharmdb = mongoose.model('pharmdb', schema);

module.exports = Pharmdb;