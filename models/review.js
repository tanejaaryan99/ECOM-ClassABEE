const mongoose = require('mongoose');

let reviewSchema = new mongoose.Schema({
    rate:{

    },
    Comment:{

    }
})


let review = mongoose.model('review' , reviewSchema);
module.exports = review;