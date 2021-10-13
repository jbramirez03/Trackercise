const router = require('express').Router();
const db = require('../../models');


router.get('/', async (req, res) => {
    try {
        const workouts = await db.Workout.find({});
        console.log(workouts);
        res.status(200).json(workouts);
    } catch (err) {
        err && res.status(500).json(err);
    }

});

router.post('/', async (req, res) => {
    try {

    } catch (err) {
        err && res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
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