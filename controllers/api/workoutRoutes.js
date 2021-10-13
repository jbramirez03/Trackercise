const router = require('express').Router();
const db = require('../../models');


router.get('/', async (req, res) => {
    try {
        const workouts = await db.Workout.find({});
        res.status(200).json(workouts);
    } catch (err) {
        err && res.status(500).json(err);
    }

});

router.post('/', async ({ body }, res) => {
    try {
        const newWorkout = await db.Workout.create(body);
        res.status(200).json(newWorkout);
    } catch (err) {
        err && res.status(500).json(err);
    }
});

router.put('/', async (req, res) => {
    try {

    } catch (err) {
        err && res.status(500).json(err);
    }
});

router.get('/range', (req, res) => {
    try {

    } catch (err) {
        err && res.status(500).json(err);
    }
});

module.exports = router;