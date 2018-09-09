let express = require('express'),
    router = express.Router(),
    path = "/";

router.get(path, (req, res) => require('../controllers/homeCtrl').get(req, res));
router.post(path, (req, res) => require('../controllers/homeCtrl').post(req, res));
router.get(path+'del/:id', (req, res) => require("../controllers/homeCtrl").delete(req, res, path));

module.exports = router;
