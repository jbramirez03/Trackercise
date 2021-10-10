const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },

    totalDuration: Integer,

    numExercises: Integer,

    totalWeight: Integer,

    totalSets: Integer,

    totalReps: Integer,

    totalDistance: Integer
});