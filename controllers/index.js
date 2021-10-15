const apiRoutes = require('./api');
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;