let express = require('express'),
    router = express.Router(),
    path = "/";

router.get('*', (req, res) => {
  res.status(404);
  res.write('404: File Not Found');
  res.end();
});

module.exports = router;
