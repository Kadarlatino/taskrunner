let express = require('express'),
    router = express.Router(),
    path = '/login';

router.get(path, (req, res) => require('../controllers/loginCtrl').get(req, res));
router.post(path, (req, res) => require('../controllers/loginCtrl').post(req, res));

module.exports = router;
