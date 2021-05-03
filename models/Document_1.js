const mongoose = require('mongoose');

const Document_1Schema = mongoose.Schema({
    
    full_name : {
        type: String
    },
    email : {
        type: String
    },
    number : {
        type: Number
    },
    city : {
        type: String
    },
    url : {
        type: String
    }
});

module.exports = mongoose.model('document_1', Document_1Schema);