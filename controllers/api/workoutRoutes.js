const router = require('express').Router();
const db = require('../../models');


router.get('/workouts', async (req, res) => {
    try {
        const workouts = await db.Workout.find({});
        console.log(workouts);
        res.status(200).json(workouts);
    } catch (err) {
        err && console.log(err);
    }

});

router.put('/workouts', (req, res) => {

});

router.post('/workouts', (req, res) => {

});

router.get('./workouts/range', (req, res) => {

});

module.exports = router;