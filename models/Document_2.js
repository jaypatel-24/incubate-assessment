const mongoose = require('mongoose');

const Document_2Schema = mongoose.Schema({
    
    full_name : {
        type: String
    },
    email : {
        type: String
    },
    team_name : {
        type: String
    }
});

module.exports = mongoose.model('document_2', Document_2Schema);