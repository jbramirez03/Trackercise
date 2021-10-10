const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    duration: {
        type: Integer,
    },
    distance: {
        type: Integer,
    },
    weight: {
        type: Integer,
    },
    reps: {
        type: Integer
    },
    sets: {
        type: Integer
    }

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
