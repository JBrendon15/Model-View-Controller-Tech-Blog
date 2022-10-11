const router = require('express').Router();
const postRoutes = require('./post-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/post', postRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;