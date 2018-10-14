let express = require('express'),
    router = express.Router(),
    pathProf = '/profile',
    pathReg = '/register',
    pathLog = '/login';

// Register
router.get(pathReg, (req, res) => require('../controllers/userCtrl').get(req, res));
router.post(pathReg, (req, res) => require('../controllers/userCtrl').post(req, res));

// Login
router.get(pathLog, (req, res) => require('../controllers/userCtrl').get(req, res));
router.post(pathLog, (req, res) => require('../controllers/userCtrl').post(req, res));

// Profile
router.get(pathProf, (req, res) => require('../controllers/userCtrl').get(req, res));
router.post(pathProf, (req, res) => require('../controllers/userCtrl').post(req, res));

module.exports = router;
