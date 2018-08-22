let express = require('express'),
    router = express.Router();

router.get('/api', (req, res) => require('../controllers/apiCtrl').get(req, res));

module.exports = router;
