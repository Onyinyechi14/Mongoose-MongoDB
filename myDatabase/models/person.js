const mongoose = require('mongoose')

const Person = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    favoriteFood: {
        type: String,
        
    },

},{
    timestamps: true // it generate time it was created /updated. 
})

module.exports = mongoose.model('Person', Person)