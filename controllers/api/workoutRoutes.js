const router = require('express').Router();
const db = require('../../models');


router.get('/', async (req, res) => {
    try {
        const workouts = await db.Workout.find({});
        console.log(workouts);
        res.status(200).json(workouts);
    } catch (err) {
        err && console.log(err);
    }

});

router.post('/', async (req, res) => {

});

router.post('/', async (req, res) => {

});

router.get('/range', (req, res) => {

});

module.exports = router;