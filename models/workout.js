const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercises"
        }
    ]
});

const Workout = mongoose.model('Workouts', workoutSchema);

module.exports = Workout;