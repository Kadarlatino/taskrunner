let express = require('express'),
    router = express.Router();

router.get('/api', (req, res) => require('../controllers/apiCtrl').get(req, res));
router.post('/api', (req, res) => require('../controllers/apiCtrl').post(req, res));

module.exports = router;
