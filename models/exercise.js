const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String
    },
    name: {
        type: String,
        required: 'must give name of exercise'
    },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    }
});

const Exercise = mongoose.model('Exercises', exerciseSchema);